import { reqWithAuthWrapper } from "@/lib/server/api"
import { deletePost } from "@/lib/server/dbQueries"
import { NextResponse } from "next/server"

export const POST = reqWithAuthWrapper(async (req, userId) => {
  const { postId } = (await req.json()) as { postId: string }
  await deletePost(postId, userId)

  return NextResponse.json({ status: 200 })
})
