import { reqWithAuthWrapper } from "@/lib/server/api"
import { getUser, isUserFollowing, unfollowUser } from "@/lib/server/dbQueries"
import { NextResponse } from "next/server"

// Unfollow user if user exists and we are currently following user
export const PUT = reqWithAuthWrapper(async (req, userId) => {
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
})
