import { reqWithAuthWrapper } from "@/lib/server/api"
import { prisma } from "@/prisma/prisma"
import { NextResponse } from "next/server"

// Delete post by id if userId matches poster
export const POST = reqWithAuthWrapper(async (req, userId) => {
  const { postId } = await req.json()
  const postToDelete = await prisma.post.delete({
    where: {
      authorId: userId,
      id: postId,
    },
  })

  if (!postToDelete) {
    return NextResponse.json({ error: "Post id doesn't match user id" }, { status: 400 })
  }

  return NextResponse.json({ status: 200 })
})
