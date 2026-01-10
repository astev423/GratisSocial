import { reqWithAuthWrapper } from "@/lib/server/api"
import { prisma } from "@/prisma/prisma"
import { NextResponse } from "next/server"

export const POST = reqWithAuthWrapper(async (req, userId) => {
  const { postId, interaction } = await req.json()

  // 1. Read current reaction from this user on this post
  const existing = await prisma.like.findFirst({
    where: {
      postId,
      likerId: userId,
    },
  })

  // oldValue: like = +1, dislike = -1, none = 0
  let oldValue = 0
  if (existing) {
    oldValue = existing.liked ? 1 : -1
  }

  // 2. Work out what the new reaction should be
  //    like      -> +1
  //    dislike   -> -1
  //    remove*   -> 0
  let newValue = 0

  if (interaction === "like") {
    newValue = 1
  } else if (interaction === "dislike") {
    newValue = -1
  } else if (interaction === "removeLike" || interaction === "removeDislike") {
    newValue = 0
  } else {
    return NextResponse.json({ error: "Invalid interaction" }, { status: 400 })
  }

  // 3. How much should likeCount change?
  const changeLikeCountBy = newValue - oldValue

  // 4. Update the like/dislike row
  // Remove old one if it exists
  if (existing) {
    await prisma.like.deleteMany({
      where: {
        postId,
        likerId: userId,
      },
    })
  }

  // Create new one if needed
  if (newValue !== 0) {
    await prisma.like.create({
      data: {
        postId,
        likerId: userId,
        liked: newValue === 1, // true = like, false = dislike
      },
    })
  }

  // 5. Update the post likeCount if needed
  if (changeLikeCountBy !== 0) {
    await prisma.post.update({
      where: { id: postId },
      data: {
        likeCount: {
          increment: changeLikeCountBy,
        },
      },
    })
  }

  return NextResponse.json({ status: 200 })
})
