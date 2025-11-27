import { getUser, isUserFollowing, unfollowUser } from "@/lib/server/dbQueries"
import { auth } from "@clerk/nextjs/server"
import { NextRequest, NextResponse } from "next/server"

// Unfollow user if user exists and we are currently following user
export async function PUT(req: NextRequest) {
  const { userId } = await auth()
  if (userId == null) {
    return NextResponse.json({ error: "User not signed in" }, { status: 400 })
  }

  const { username } = await req.json()
  const viewedUser = await getUser(username)
  if (viewedUser == null) {
    return NextResponse.json({ error: "User doesn't exist" }, { status: 400 })
  }

  const isFollowing = await isUserFollowing(userId, viewedUser.id)
  if (isFollowing) {
    unfollowUser(userId, viewedUser.id)
    return NextResponse.json({ status: 200 })
  }

  return NextResponse.json({ error: "You are already aren't following" }, { status: 400 })
}
