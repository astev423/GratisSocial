import { type NextRequest, NextResponse } from "next/server"

import { getCommentsOnPost } from "@/lib/server/dbQueries"

// Next.js gets params from route here, so we don't need to query it from URL
export async function GET(_req: NextRequest, { params }: { params: Promise<{ postId: string }> }) {
  const { postId } = await params
  const comments = await getCommentsOnPost(postId)

  return NextResponse.json(comments, { status: 200 })
}
