import { NextResponse } from "next/server"

import { reqWithAuthWrapper } from "@/lib/server/api"
import { getUserLikeStatusOfPost } from "@/lib/server/dbQueries"

// Get user from their ID in POST request, only call this from SERVER as users can fake their ID
export const POST = reqWithAuthWrapper(async (req, userId) => {
  const { postId } = await req.json()
  const likeInfo = await getUserLikeStatusOfPost(postId, userId)
  const likeStatus = likeInfo?.liked
  if (likeStatus) {
    return NextResponse.json({ status: "liked" }, { status: 200 })
  } else if (likeStatus === false) {
    return NextResponse.json({ status: "disliked" }, { status: 200 })
  }

  return NextResponse.json({ status: "neither" }, { status: 200 })
})
