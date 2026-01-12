import { fetchFollowInfoFromGivenId, tryFetchUserByUsername } from "@/lib/server/dbQueries"
import { NextResponse } from "next/server"

// Take in username and return follow info
export async function POST(request: Request) {
  const { username } = await request.json()

  // Use username to get id
  const user = await tryFetchUserByUsername(username)
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 400 })
  }
  const { id: userId } = user

  // Use id to get follower infomation
  const { followersCount, followingCount } = await fetchFollowInfoFromGivenId(userId)

  return NextResponse.json({ following: followingCount, followers: followersCount }, { status: 200 })
}
