import { NextResponse } from "next/server"

import { reqWithAuthWrapper } from "@/lib/server/api"
import { fetchLikeCountOfPost, getUserLikeStatusOfPost } from "@/lib/server/dbQueries"
import type { LikeInfo } from "@/types/types"

export const POST = reqWithAuthWrapper(async (req, userId) => {
  const { postId } = (await req.json()) as { postId: string }
  const likeRow = await getUserLikeStatusOfPost(postId, userId)
  const numLikes = await fetchLikeCountOfPost(postId)
  let likeStatus: LikeInfo["status"]
  if (likeRow === null) {
    likeStatus = "neither"
  } else if (likeRow.liked) {
    likeStatus = "liked"
  } else {
    likeStatus = "disliked"
  }

  const likeInfo: LikeInfo = { status: likeStatus, numLikes: numLikes === undefined ? 0 : numLikes }
  return NextResponse.json(likeInfo, { status: 200 })
})
