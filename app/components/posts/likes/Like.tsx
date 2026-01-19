import { likeOrDislikeInteraction } from "@/lib/client/utils"
import { LikeInfo } from "@/types/types"
import Image from "next/image"
import { useState } from "react"

type LikeInteractionData = {
  postId: string
  interaction: "like" | "dislike" | "removeLike" | "removeDislike"
}
type LikeStatus = "liked" | "disliked" | "neither"

export default function Like({
  postId,
  initialNumLikes,
  initialLikeStatus,
}: {
  postId: string
  initialNumLikes: number
  initialLikeStatus: LikeStatus
}) {
  const [numLikes, setNumLikes] = useState(initialNumLikes)
  const [likeStatus, setLikeStatus] = useState(initialLikeStatus)
  const likeButtonImagePath =
    likeStatus == "liked" ? "/icons/clicked-thumbs-up.svg" : "/icons/unclicked-thumbs-up.svg"
  const dislikeButtonImagePath =
    likeStatus == "disliked" ? "/icons/clicked-thumbs-down.svg" : "/icons/unclicked-thumbs-down.svg"
  const likeButtonOnClickData: LikeInteractionData = {
    postId,
    interaction: likeStatus == "liked" ? "removeLike" : "like",
  }
  const dislikeButtonOnClickData: LikeInteractionData = {
    postId,
    interaction: likeStatus == "disliked" ? "removeDislike" : "dislike",
  }

  async function submitLikeInteraction(buttonPressed: "like" | "dislike") {
    if (buttonPressed == "like") {
      await likeOrDislikeInteraction(likeButtonOnClickData)
    } else {
      await likeOrDislikeInteraction(dislikeButtonOnClickData)
    }
    const res = await fetch("/api/getPostLikeInfo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ postId }),
    })
    if (!res.ok) {
      console.error("Error getting like status")
      return
    }
    const { numLikes: newNumLikes, status } = (await res.json()) as LikeInfo
    setNumLikes(newNumLikes)
    setLikeStatus(status)
  }

  return (
    <div>
      <div>Likes: {numLikes}</div>
      <div className="flex gap-2 h-6">
        <Image
          src={likeButtonImagePath}
          alt="Like Button"
          width={25}
          height={25}
          onClick={() => submitLikeInteraction("like")}
        />
        <Image
          src={dislikeButtonImagePath}
          onClick={() => submitLikeInteraction("dislike")}
          width={25}
          height={25}
          alt="Dislike Button"
        />
      </div>
    </div>
  )
}
