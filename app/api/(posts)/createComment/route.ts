import { prisma } from "@/prisma/prisma"
import { currentUser } from "@clerk/nextjs/server"
import { NextRequest, NextResponse } from "next/server"

// This makes a new account entirely from info provided from clerk authentication
export async function POST(req: NextRequest) {
  const user = await currentUser()
  const { content, postId } = await req.json()
  if (user == null || user.username == null || content == null || postId == null) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  // Get username and email from ClerkJS and make account in DB with that info
  await prisma.post.update({
    where: {
      id: postId,
    },
    data: {
      commentCount: {
        increment: 1,
      },
    },
  })

  await prisma.comment.create({
    data: {
      postId: postId,
      commenterUsername: user.username,
      content: content,
    },
  })

  return NextResponse.json({ status: 200 })
}
