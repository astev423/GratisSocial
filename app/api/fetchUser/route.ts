import { PrismaClient } from "../../../generated/prisma"
import { NextResponse } from "next/server"
import { auth } from "@clerk/nextjs/server"

const prisma = new PrismaClient()

export async function POST() {
  const { userId } = await auth()
  if (!userId) {
    return NextResponse.json({ error: "User not found" }, { status: 400 })
  }
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  })
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 400 })
  }

  const { username, firstName, lastName } = user
  const userObjectWithoutSensitiveInfo = { username, firstName, lastName }
  return NextResponse.json(userObjectWithoutSensitiveInfo, { status: 200 })
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const usernameFromParams = searchParams.get("username")
  if (!usernameFromParams) {
    return NextResponse.json({ error: "User not found" }, { status: 400 })
  }

  const user = await prisma.user.findUnique({
    where: {
      username: usernameFromParams,
    },
  })
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 400 })
  }
  const { username, firstName, lastName } = user
  const userObjectWithoutSensitiveInfo = { username, firstName, lastName }
  return NextResponse.json(userObjectWithoutSensitiveInfo, { status: 200 })
}
