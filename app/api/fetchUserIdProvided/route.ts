import { PrismaClient } from "../../../generated/prisma"
import { NextResponse } from "next/server"

const prisma = new PrismaClient()

// Get user from their ID in POST request
export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null)
    const userId = typeof body?.userId === "string" ? body.userId : null
    if (!userId) {
      return NextResponse.json({ error: "userId required" }, { status: 400 })
    }

    const user = await prisma.user.findUnique({ where: { id: userId } })
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    const { username, firstName, lastName } = user
    return NextResponse.json({ username, firstName, lastName }, { status: 200 })
  } catch (err) {
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
