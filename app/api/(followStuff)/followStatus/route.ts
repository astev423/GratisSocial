import { isUserFollowing, tryFetchUserByTheirId, tryFetchUserByUsername } from "@/lib/server/dbQueries"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const { username: cardUsername } = await req.json()
  const cardUser = await tryFetchUserByUsername(cardUsername)
  const viewingUser = await tryFetchUserByTheirId()
  if (!cardUser || !viewingUser) {
    return NextResponse.json({ error: "Can't find users in DB" }, { status: 400 })
  }

  if (await isUserFollowing(viewingUser.id, cardUser.id)) {
    return NextResponse.json({ followStatus: "following" }, { status: 200 })
  }

  return NextResponse.json({ followStatus: "notFollowing" }, { status: 200 })
}
