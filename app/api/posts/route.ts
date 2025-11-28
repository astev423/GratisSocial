import { prisma } from "@/prisma/prisma"
import { auth } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"

// Get specified posts
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const type = searchParams.get("type")
  const username = searchParams.get("username")

  const { userId } = await auth()
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

    const allPosts = await prisma.post.findMany({
      where: {
        userId: {
          in: followedUserIds,
        },
      },
    })

    return NextResponse.json(allPosts, { status: 200 })
  } else if (type === "All") {
    const allPosts = await prisma.post.findMany()

    return NextResponse.json(allPosts, { status: 200 })
  } else if (type === "myPosts") {
    const userPosts = await prisma.post.findMany({
      where: {
        userId: userId,
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
}
