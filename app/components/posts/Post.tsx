import Link from "next/link"

import { formatDate } from "@/lib/shared/sharedUtils"
import { useAuth } from "@clerk/nextjs"
import { useState } from "react"
import type { Post as PostType } from "../../../types/types"
import CommentFeed from "./comments/CommentFeed"
import ConfirmDeletion from "./ConfirmDeletion"

type PostProps = Readonly<{
  post: PostType
  refetch: () => void
}>

export default function Post({ post, refetch }: PostProps) {
  const { userId } = useAuth()
  const [showConfirmation, setShowConfirmation] = useState(false)
  const confirmProps = {
    postId: post.id,
    setShowConfirmation: setShowConfirmation,
    refetch: refetch,
  }

  return (
    <div className="bg-white p-5 flex flex-col gap-4 w-150">
      <div className="flex justify-between ">
        <div className="text-4xl font-bold">{post.title}</div>

        {/* This part shows red X on post if post creator matches user*/}
        {post.userId == userId && (
          <div
            onClick={() => setShowConfirmation(true)}
            className="self-start text-3xl hover:brightness-50 hover:scale-140 duration-300
                      hover:cursor-pointer"
          >
            ❌
          </div>
        )}
      </div>

      {/* If red X pressed then confirm if user wants to delete post*/}
      {showConfirmation && <ConfirmDeletion confirmObject={confirmProps} />}

      {/* All other post info besides title down here*/}
      <div className="flex gap-2">
        <div>By: </div>
        <Link
          href={`/user/${post.posterUsername}`}
          className="text-blue-600 duration-200 hover:scale-120 hover:underline"
        >
          {post.posterUsername}
        </Link>
      </div>
      <div>Posted on: {formatDate(post.createdAt)}</div>
      <div className="text-3xl font-bold border-b-2 pb-4"></div>
      <div>{post.content}</div>
      <div>Likes: {post.likes}</div>
      <div>comments: {post.comments}</div>
      <CommentFeed></CommentFeed>
    </div>
  )
}
