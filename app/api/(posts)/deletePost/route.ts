import { reqWithAuthWrapper } from "@/lib/server/api"
import { deletePost } from "@/lib/server/dbQueries"
import { NextResponse } from "next/server"

// Delete post by id if userId matches poster
export const POST = reqWithAuthWrapper(async (req, userId) => {
  const { postId } = await req.json()
  deletePost(postId, userId)

  return NextResponse.json({ status: 200 })
})
