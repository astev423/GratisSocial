import { fetchFollowInfoFromGivenId, tryFetchUserByUsername } from "@/lib/server/dbQueries"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const { username } = await request.json()

  const user = await tryFetchUserByUsername(username)
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 400 })
  }
  const { followersCount, followingCount } = await fetchFollowInfoFromGivenId(user.id)

  return NextResponse.json({ following: followingCount, followers: followersCount }, { status: 200 })
}
