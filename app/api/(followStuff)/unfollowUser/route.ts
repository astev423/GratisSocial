import { NextResponse } from "next/server"
import { reqWithAuthWrapper } from "@/lib/server/api"
import { isUserFollowing, tryFetchUserByUsername, unfollowUser } from "@/lib/server/dbQueries"

export const PUT = reqWithAuthWrapper(async (req, userId) => {
  const { username } = (await req.json()) as { username: string }
  const viewedUser = await tryFetchUserByUsername(username)
  if (viewedUser === null) {
    return NextResponse.json({ error: "User doesn't exist" }, { status: 400 })
  }

  const isFollowing = await isUserFollowing(userId, viewedUser.id)
  if (isFollowing) {
    await unfollowUser(userId, viewedUser.id)
    return NextResponse.json({ status: 200 })
  }

  return NextResponse.json(
    { error: "You can unfollow a user if you aren't following them in the first place" },
    { status: 400 },
  )
})
