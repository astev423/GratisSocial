import { likeOrDislikeInteraction, useFetch } from "@/lib/client/utils"
import { Post } from "@/types/types"
import Image from "next/image"
import { Dispatch, SetStateAction, useState } from "react"

type LikeProps = {
  post: Post
  refetch: Dispatch<SetStateAction<number>>
}
type LikeStatus = {
  status: "liked" | "disliked" | "neither"
}

export default function Like({ post: { id: postId }, refetch }: LikeProps) {
  const [refresh, setRefresh] = useState(0)
  const {
    data: likeInfo,
    loading,
    error,
  } = useFetch<LikeStatus>("/api/getLikeStatus", {
    postId,
    refresh,
  })
  if (likeInfo == null) {
    return
  }

  type LikeInteractionData = {
    postId: string
    interaction: "like" | "dislike" | "removeLike" | "removeDislike"
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
    console.log("refetching!")
    refetch((i) => i + 1)
    setRefresh((i) => i + 1)
  }

  return (
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
  )
}
