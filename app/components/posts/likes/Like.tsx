import { likeOrDislikeInteraction, useFetch } from "@/lib/client/utils"
import { Post } from "@/types/types"
import Image from "next/image"
import { Dispatch, SetStateAction, useState } from "react"
import SpinningIcon from "../../SpinningIcon"

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

  if (loading) {
    return (
      <div className="h-6 overflow-hidden flex items-center">
        <SpinningIcon size={20}></SpinningIcon>
      </div>
    )
  }

  type LikeInteractionData = {
    postId: string
    interaction: "like" | "dislike" | "removeLike" | "removeDislike"
  }
  let likeButtonImagePath: string
  let dislikeButtonImagePath: string
  let likeButtonOnClickData: LikeInteractionData
  let dislikeButtonOnClickData: LikeInteractionData
  if (likeInfo?.status == "liked") {
    likeButtonImagePath = "/icons/clicked-thumbs-up.svg"
    dislikeButtonImagePath = "/icons/unclicked-thumbs-down.svg"
    likeButtonOnClickData = { postId, interaction: "removeLike" }
  } else {
    likeButtonImagePath = "/icons/unclicked-thumbs-up.svg"
    likeButtonOnClickData = { postId, interaction: "like" }
    if (likeInfo?.status == "disliked") {
      dislikeButtonImagePath = "/icons/clicked-thumbs-down.svg"
      dislikeButtonOnClickData = { postId, interaction: "removeDislike" }
    } else {
      dislikeButtonImagePath = "/icons/unclicked-thumbs-down.svg"
      dislikeButtonOnClickData = { postId, interaction: "dislike" }
    }
  }

  async function submitLikeInteraction() {
    await likeOrDislikeInteraction(likeButtonOnClickData)
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
        onClick={submitLikeInteraction}
      />
      <Image
        src={dislikeButtonImagePath}
        alt="Dislike Button"
        onClick={submitLikeInteraction}
        width={25}
        height={25}
      />
    </div>
  )
}
