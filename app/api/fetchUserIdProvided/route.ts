import { NextResponse } from "next/server"

import { prisma } from "@/prisma/prisma"

// Get user from their ID in POST request, only call this from SERVER as users can fake their ID
export async function POST(req: Request) {
  const body = await req.json()
  const { userId } = body
  if (!userId) {
    return NextResponse.json({ error: "userId required" }, { status: 400 })
  }

  const user = await prisma.user.findUnique({ where: { id: userId } })
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 })
  }

  const { username, firstName, lastName } = user
  return NextResponse.json({ username, firstName, lastName }, { status: 200 })
}
