import { reqWithAuthWrapper } from "@/lib/server/api"
import { followUser, isUserFollowing, tryGetUser } from "@/lib/server/dbQueries"
import { NextResponse } from "next/server"

// Follow user if user exists and we are not following user yet
export const PUT = reqWithAuthWrapper(async (req, userId) => {
  const { username } = await req.json()
  const viewedUser = await tryGetUser(username)
  if (viewedUser == null) {
    return NextResponse.json({ error: "User doesn't exist" }, { status: 400 })
  }

  const isFollowing = await isUserFollowing(userId, viewedUser.id)
  if (isFollowing) {
    return NextResponse.json({ error: "You are already following" }, { status: 400 })
  }

  await followUser(userId, viewedUser.id)
  return NextResponse.json({ status: 200 })
})
