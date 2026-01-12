import { isUserFollowing, tryFetchUserByTheirId, tryFetchUserByUsername } from "@/lib/server/dbQueries"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  // Find the users to check if viewer if following that user
  const { username: cardUsername } = await req.json()
  const cardUser = await tryFetchUserByUsername(cardUsername)
  const viewingUser = await tryFetchUserByTheirId()
  if (!cardUser || !viewingUser) {
    return NextResponse.json({ error: "Can't find users in DB" }, { status: 400 })
  }

  if (!isUserFollowing(viewingUser.id, cardUser.id)) {
    return NextResponse.json({ followStatus: "Not Following" }, { status: 200 })
  }

  return NextResponse.json({ followStatus: "Following" }, { status: 200 })
}
