import { type NextRequest, NextResponse } from "next/server"

import { getCommentsOnPost } from "@/lib/server/dbQueries"

export async function POST(req: NextRequest) {
  const { postId } = (await req.json()) as { postId: string }
  const comments = await getCommentsOnPost(postId)

  return NextResponse.json(comments, { status: 200 })
}
