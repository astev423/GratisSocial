import { NextResponse } from "next/server"

import { reqWithAuthWrapper } from "@/lib/server/api"
import { fetchLikeCountOfPost, getUserLikeStatusOfPost } from "@/lib/server/dbQueries"

export const POST = reqWithAuthWrapper(async (req, userId) => {
  const { postId } = await req.json()
  const likeRow = await getUserLikeStatusOfPost(postId, userId)
  const numLikes = await fetchLikeCountOfPost(postId)
  let likeInfo = { status: "", numLikes: numLikes == undefined ? 0 : numLikes }
  if (likeRow == null) {
    likeInfo.status = "neither"
  } else if (likeRow.liked) {
    likeInfo.status = "liked"
  } else {
    likeInfo.status = "disliked"
  }

  return NextResponse.json(likeInfo, { status: 200 })
})
