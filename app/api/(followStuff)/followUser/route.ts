import { reqWithAuthWrapper } from "@/lib/server/api"
import { followUser, isUserFollowing, tryFetchUserByUsername } from "@/lib/server/dbQueries"
import { NextResponse } from "next/server"

export const PUT = reqWithAuthWrapper(async (req, userId) => {
  const { username } = await req.json()
  const viewedUser = await tryFetchUserByUsername(username)
  if (viewedUser == null) {
    return NextResponse.json({ error: "User doesn't exist" }, { status: 400 })
  }

  const isFollowing = await isUserFollowing(userId, viewedUser.id)
  if (isFollowing) {
    return NextResponse.json({ error: "You are already following" }, { status: 400 })
  }

  // We use try catch even though function is void because Promise<void> can still be rejected if one of
  // the promises we wait for fails, in that case catch runs
  try {
    await followUser(userId, viewedUser.id)
  } catch {
    return NextResponse.json(
      { error: "Failed to follow user, perhaps something in the transaction failed" },
      { status: 400 },
    )
  }

  return NextResponse.json({ status: 200 })
})
