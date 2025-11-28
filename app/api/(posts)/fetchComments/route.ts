import { NextResponse } from "next/server"

import { prisma } from "@/prisma/prisma"
import { auth } from "@clerk/nextjs/server"

// Get user from their ID in POST request, only call this from SERVER as users can fake their ID
export async function POST(req: Request) {
  const { userId } = await auth()
  if (userId == null) {
    return NextResponse.json({ status: 400 })
  }

  const { postId } = await req.json()
  const comments = await prisma.comment.findMany({ where: { postId: postId } })

  return NextResponse.json({ comments }, { status: 200 })
}
