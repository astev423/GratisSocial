import { type NextRequest, NextResponse } from "next/server"
import { isUserFollowing, tryFetchUserByTheirId, tryFetchUserByUsername } from "@/lib/server/dbQueries"

export async function GET(_req: NextRequest, { params }: { params: Promise<{ username: string }> }) {
  const { username: cardUsername } = await params
  const cardUser = await tryFetchUserByUsername(cardUsername)
  const viewingUser = await tryFetchUserByTheirId()
  if (!cardUser || !viewingUser) {
    return NextResponse.json({ error: "Can't find users in DB" }, { status: 404 })
  }

  if (await isUserFollowing(viewingUser.id, cardUser.id)) {
    return NextResponse.json({ followStatus: "following" }, { status: 200 })
  }

  return NextResponse.json({ followStatus: "notFollowing" }, { status: 200 })
}
