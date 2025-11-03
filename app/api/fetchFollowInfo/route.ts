import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

// Don't validate id server side since we need to use this for viewing other account's follow info
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const userId = searchParams.get("userId")
  if (!userId) {
    return NextResponse.json({ error: "User ID is required." }, { status: 400 })
  }

  const followersCount = await prisma.follow.count({
    where: {
      personFollowedId: userId,
    },
  })
  const followingCount = await prisma.follow.count({
    where: {
      followerId: userId,
    },
  })

  return NextResponse.json(
    { following: followingCount, followers: followersCount },
    { status: 200 }
  )
}
