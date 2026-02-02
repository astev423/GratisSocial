import { NextResponse } from "next/server"

import { reqWithAuthWrapper } from "@/lib/server/api"
import { fetchLikeCountOfPost, getUserLikeStatusOfPost } from "@/lib/server/dbQueries"
import type { LikeInfo } from "@/types/types"

export const GET = reqWithAuthWrapper(async (req, userId) => {
  const url = new URL(req.url)
  const postId = url.searchParams.get("postId")
  if (!postId) {
    return NextResponse.json({ error: "Missing postId" }, { status: 400 })
  }

  const likeRow = await getUserLikeStatusOfPost(postId, userId)
  const numLikes = await fetchLikeCountOfPost(postId)
  let likeStatus: LikeInfo["status"]
  if (!likeRow) {
    likeStatus = "neither"
  } else if (likeRow.liked) {
    likeStatus = "liked"
  } else {
    likeStatus = "disliked"
  }

  const likeInfo: LikeInfo = { status: likeStatus, numLikes: numLikes === undefined ? 0 : numLikes }
  return NextResponse.json(likeInfo, { status: 200 })
})
