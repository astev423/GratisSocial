import { likeOrDislikeInteraction } from "@/lib/client/utils"
import { Post } from "@/types/types"
import Image from "next/image"
import { Dispatch, SetStateAction, useEffect, useState } from "react"

type LikeProps = {
  post: Post
  refetch: Dispatch<SetStateAction<number>>
}

export default function Like({ post: { id: postId }, refetch }: LikeProps) {
  const [likeStatus, setLikeStatus] = useState<"liked" | "disliked" | "neither">("neither")
  const [refresh, setRefresh] = useState(0)

  // Use custom hook here instead of this, removes need of useEffect as well
  async function getLikeStatus(postId: string) {
    const res = await fetch("/api/getLikeStatus", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ postId }),
    })
    if (!res.ok) {
      console.error("Error getting like status")
      return
    }

    const { status } = await res.json()
    console.log(status)
    setLikeStatus(status)
  }

  useEffect(() => {
    getLikeStatus(postId)
  }, [refresh])

  return (
    <div className="flex gap-2">
      {likeStatus == "liked" ? (
        <>
          <Image
            src="/icons/clicked-thumbs-up.svg"
            alt="Like Button"
            width={25}
            onClick={async () => {
              await likeOrDislikeInteraction({ postId, interaction: "removeLike" })
              refetch((i) => i + 1)
              setRefresh((i) => i + 1)
            }}
            height={25}
          />
          <Image
            onClick={async () => {
              await likeOrDislikeInteraction({ postId, interaction: "dislike" })
              refetch((i) => i + 1)
              setRefresh((i) => i + 1)
            }}
            src="/icons/unclicked-thumbs-down.svg"
            alt="Dislike Button"
            width={25}
            height={25}
          />
        </>
      ) : (
        <>
          <Image
            src="/icons/unclicked-thumbs-up.svg"
            alt="Like Button"
            width={25}
            onClick={async () => {
              await likeOrDislikeInteraction({ postId, interaction: "like" })
              refetch((i) => i + 1)
              setRefresh((i) => i + 1)
            }}
            height={25}
          />
          {likeStatus == "disliked" ? (
            <Image
              onClick={async () => {
                await likeOrDislikeInteraction({ postId, interaction: "removeDislike" })
                refetch((i) => i + 1)
                setRefresh((i) => i + 1)
              }}
              src="/icons/clicked-thumbs-down.svg"
              alt="Dislike Button"
              width={25}
              height={25}
            />
          ) : (
            <Image
              onClick={async () => {
                await likeOrDislikeInteraction({ postId, interaction: "dislike" })
                refetch((i) => i + 1)
                setRefresh((i) => i + 1)
              }}
              src="/icons/unclicked-thumbs-down.svg"
              alt="Dislike Button"
              width={25}
              height={25}
            />
          )}
        </>
      )}
    </div>
  )
}
