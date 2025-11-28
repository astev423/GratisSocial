import { prisma } from "@/prisma/prisma"
import { auth } from "@clerk/nextjs/server"
import { NextRequest, NextResponse } from "next/server"

// This makes a new account entirely from info provided from clerk authentication
export async function POST(req: NextRequest) {
  const { userId } = await auth()
  const { content, postId } = await req.json()
  if (!userId || content == null || postId == null) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  // Get username and email from ClerkJS and make account in DB with that info
  await prisma.comment.create({
    data: {
      postId: postId,
      commenterId: userId,
      content: content,
    },
  })

  return NextResponse.json({ status: 200 })
}
