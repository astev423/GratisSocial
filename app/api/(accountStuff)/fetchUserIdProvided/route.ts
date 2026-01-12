import { NextResponse } from "next/server"

import { tryFetchUserByGivenId } from "@/lib/server/dbQueries"

// Get user from their ID in POST request, only call this from SERVER as users can fake their ID
export async function POST(req: Request) {
  const { userId } = await req.json()
  if (userId == null) {
    return NextResponse.json({ error: "userId required" }, { status: 400 })
  }

  const user = await tryFetchUserByGivenId(userId)
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 })
  }

  const { username, firstName, lastName } = user
  return NextResponse.json({ username, firstName, lastName }, { status: 200 })
}
