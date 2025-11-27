import { getUser, isUserFollowing, unfollowUser } from "@/lib/server/dbQueries"
import { auth } from "@clerk/nextjs/server"
import { NextRequest, NextResponse } from "next/server"

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

  if (await isUserFollowing(userId, viewedUser.id)) {
    unfollowUser(userId, viewedUser.id)
    return NextResponse.json({ status: 200 })
  } else {
    return NextResponse.json({ error: "You are already not following" }, { status: 400 })
  }
}
