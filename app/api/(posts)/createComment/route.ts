import { createCommentOnPost, updatePost } from "@/lib/server/dbQueries"
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

  await updatePost(postId, { commentCount: { increment: 1 } })

  await createCommentOnPost(postId, user.username, content)

  return NextResponse.json({ status: 200 })
}
