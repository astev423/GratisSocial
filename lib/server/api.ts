import { auth } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"
import { prisma } from "../../prisma/prisma"

// This returns a function because we want to assign it to a function
export function withAuth(handler: (req: Request, userId: string) => Promise<Response>) {
  return async (req: Request) => {
    const { userId } = await auth()
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    return handler(req, userId)
  }
}

// use like
export const POST = withAuth(async (_req, userId) => {
  const account = await prisma.user.create({ id: userId })
  return NextResponse.json(account)
})
