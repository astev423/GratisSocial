import { NextRequest, NextResponse } from "next/server"

import { getCommentsOnPost } from "@/lib/server/dbQueries"

// Get user from their ID in POST request, only call this from SERVER as users can fake their ID
export async function POST(req: NextRequest) {
  const { postId } = await req.json()
  const comments = await getCommentsOnPost(postId)

  return NextResponse.json(comments, { status: 200 })
}
