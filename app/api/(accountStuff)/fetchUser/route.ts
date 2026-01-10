import { reqWithAuthWrapper } from "@/lib/server/api"
import { prisma } from "@/prisma/prisma"
import { NextResponse } from "next/server"

// Get user from their ID
export const POST = reqWithAuthWrapper(async (_req, userId) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  })
  if (!user) {
    return NextResponse.json({ error: "User not found in database" }, { status: 400 })
  }

  const { username, firstName, lastName } = user
  const userObjectWithoutSensitiveInfo = { username, firstName, lastName }
  return NextResponse.json(userObjectWithoutSensitiveInfo, { status: 200 })
})

// Get user from URL username parameters
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const usernameFromParams = searchParams.get("username")
  if (!usernameFromParams) {
    return NextResponse.json({ error: "Couldn't find username in serach params" }, { status: 400 })
  }

  const user = await prisma.user.findUnique({
    where: {
      username: usernameFromParams,
    },
  })
  if (!user) {
    return NextResponse.json({ error: "Username not found in DB" }, { status: 400 })
  }

  const { username, firstName, lastName } = user
  const userObjectWithoutSensitiveInfo = { username, firstName, lastName }
  return NextResponse.json(userObjectWithoutSensitiveInfo, { status: 200 })
}
