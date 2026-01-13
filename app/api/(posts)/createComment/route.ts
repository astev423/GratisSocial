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

  await createCommentOnPost(postId, content, user.username)
  await updatePost(postId, { commentCount: { increment: 1 } })

  return NextResponse.json({ status: 200 })
}
