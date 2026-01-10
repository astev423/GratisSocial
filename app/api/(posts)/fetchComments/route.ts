import { NextResponse } from "next/server"

import { reqWithAuthWrapper } from "@/lib/server/api"
import { prisma } from "@/prisma/prisma"

// Get user from their ID in POST request, only call this from SERVER as users can fake their ID
export const POST = reqWithAuthWrapper(async (req, _userId) => {
  const { postId } = await req.json()
  const comments = await prisma.comment.findMany({ where: { postId: postId } })

  return NextResponse.json({ comments }, { status: 200 })
})
