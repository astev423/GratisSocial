import { likeOrDislikeInteraction, useFetch } from "@/lib/client/utils"
import { LikeInfo } from "@/types/types"
import Image from "next/image"
import { useState } from "react"

type LikeInteractionData = {
  postId: string
  interaction: "like" | "dislike" | "removeLike" | "removeDislike"
}

export default function Like({ postId }: { postId: string }) {
  const [refresh, setRefresh] = useState(0)
  const {
    data: likeInfo,
    loading,
    error,
  } = useFetch<LikeInfo>("/api/getPostLikeInfo", "POST", refresh, {
    postId,
  })
  if (likeInfo == null) {
    return
  }
  const likeButtonImagePath =
    likeInfo.status == "liked" ? "/icons/clicked-thumbs-up.svg" : "/icons/unclicked-thumbs-up.svg"
  const dislikeButtonImagePath =
    likeInfo.status == "disliked" ? "/icons/clicked-thumbs-down.svg" : "/icons/unclicked-thumbs-down.svg"
  const likeButtonOnClickData: LikeInteractionData = {
    postId,
    interaction: likeInfo.status == "liked" ? "removeLike" : "like",
  }
  const dislikeButtonOnClickData: LikeInteractionData = {
    postId,
    interaction: likeInfo.status == "disliked" ? "removeDislike" : "dislike",
  }

  async function submitLikeInteraction(buttonPressed: "like" | "dislike") {
    if (buttonPressed == "like") {
      await likeOrDislikeInteraction(likeButtonOnClickData)
    } else {
      await likeOrDislikeInteraction(dislikeButtonOnClickData)
    }
    setRefresh((i) => i + 1)
  }

  return (
    <div>
      <div>Likes: {likeInfo.numLikes}</div>
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
