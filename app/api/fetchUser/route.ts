import { PrismaClient } from "../../../generated/prisma"
import { NextResponse } from "next/server"

const prisma = new PrismaClient()

interface User {
  id: string
  email: string
  username: string
  firstName: string
  lastName: string
  createdAt: Date
}

// It expects a 'userId' query parameter in the URL (e.g., /api/user?userId=123)
// MAKE THIS MORE SECURE, DONT LEAK USERID
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const userId = searchParams.get("userId")
  const usernameFromParams = searchParams.get("username")
  let user: User | null
  // handle is userId is searched for
  if (userId) {
    user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    })
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 400 })
    }
  }
  // handle if username is searched for
  else if (usernameFromParams) {
    user = await prisma.user.findUnique({
      where: {
        username: usernameFromParams,
      },
    })
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 400 })
    }
  } else {
    return NextResponse.json({ error: "Interal server error" }, { status: 500 })
  }
  const { username, firstName, lastName } = user
  const userObjectWithoutSensitiveInfo = { username, firstName, lastName }
  return NextResponse.json(userObjectWithoutSensitiveInfo, { status: 200 })
}
