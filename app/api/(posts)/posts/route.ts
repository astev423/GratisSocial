import { reqWithAuthWrapper } from "@/lib/server/api"
import { prisma } from "@/prisma/prisma"
import { NextResponse } from "next/server"

// Get specified posts
export const GET = reqWithAuthWrapper(async (req, userId) => {
  const { searchParams } = new URL(req.url)
  const type = searchParams.get("type")
  const username = searchParams.get("username")

  if (!userId || !type) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  if (type === "Following") {
    const follows = await prisma.follow.findMany({
      where: {
        followerId: userId,
      },
    })
    const followedUserIds = follows.map((f) => f.personFollowedId)

    const followedPosts = await prisma.post.findMany({
      where: {
        authorId: {
          in: followedUserIds,
        },
      },
    })

    return NextResponse.json(followedPosts, { status: 200 })
  } else if (type === "All") {
    const allPosts = await prisma.post.findMany()

    return NextResponse.json(allPosts, { status: 200 })
  } else if (type === "myPosts") {
    const userPosts = await prisma.post.findMany({
      where: {
        authorId: userId,
      },
    })

    return NextResponse.json(userPosts, { status: 200 })
  } else if (type == "specificUser") {
    if (!username) {
      return NextResponse.json(
        { error: "Can't fetch info for specific user if no username provided" },
        { status: 401 },
      )
    }

    const userPosts = await prisma.post.findMany({
      where: {
        posterUsername: username,
      },
    })

    return NextResponse.json(userPosts, { status: 200 })
  }

  // If no if statements activated then request failed
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
})
