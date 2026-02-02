import { NextResponse } from "next/server"
import { reqWithAuthWrapper } from "@/lib/server/api"
import {
  createLikeOnPostFromUser,
  deleteLikesOnPostFromUser,
  tryFindLikeInfoForUserOnPost,
  updateLikeCount,
} from "@/lib/server/dbQueries"
import { LikeInteraction } from "@/types/types"

export const PUT = reqWithAuthWrapper(async (req, userId) => {
  const { postId, interaction } = (await req.json()) as { postId: string; interaction: LikeInteraction }

  // 1. Read current reaction from this user on this post
  const existing = await tryFindLikeInfoForUserOnPost(postId, userId)

  // oldValue: like = +1, dislike = -1, none = 0
  let oldValue = 0
  if (existing) {
    oldValue = existing.liked ? 1 : -1
  }

  // 2. Work out what the new reaction should be
  //    like      -> +1
  //    dislike   -> -1
  //    remove*   -> 0
  let newValue = 0

  if (interaction === LikeInteraction.Like) {
    newValue = 1
  } else if (interaction === LikeInteraction.Dislike) {
    newValue = -1
  } else if (interaction === LikeInteraction.RemoveLike || interaction === LikeInteraction.RemoveDislike) {
    newValue = 0
  } else {
    return NextResponse.json({ error: "Invalid interaction" }, { status: 400 })
  }

  // 3. How much should likeCount change?
  const changeLikeCountBy = newValue - oldValue

  // 4. Update the like/dislike row
  // Remove old one if it exists
  if (existing) {
    await deleteLikesOnPostFromUser(postId, userId)
  }

  // Create new one if needed
  if (newValue !== 0) {
    await createLikeOnPostFromUser(postId, userId, newValue)
  }

  // 5. Update the post likeCount if needed
  if (changeLikeCountBy !== 0) {
    await updateLikeCount(postId, changeLikeCountBy)
  }

  return NextResponse.json({ status: 200 })
})
