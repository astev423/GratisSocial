import { useAuth } from "@clerk/nextjs"
import Link from "next/link"
import { type Dispatch, type SetStateAction, useState } from "react"
import { formatDate } from "@/lib/shared/sharedUtils"
import type { PostWithLikeInfo } from "../../../types/types"
import ConfirmDeletion from "./ConfirmDeletion"
import CommentFeed from "./comments/CommentFeed"
import Like from "./likes/Like"

type PostProps = Readonly<{
  post: PostWithLikeInfo
  refetch: Dispatch<SetStateAction<number>>
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
    <div className="bg-white p-5 flex flex-col gap-4 ">
      <div className="flex justify-between ">
        <h2 className="text-4xl font-bold">{post.title}</h2>

        {/* This part shows red X on post if post creator matches user*/}
        {post.authorId === userId && (
          <button
            type="button"
            onClick={() => setShowConfirmation(true)}
            className="self-start text-3xl hover:brightness-50 hover:scale-140 duration-300
                      hover:cursor-pointer"
          >
            ❌
          </button>
        )}
      </div>

      {/* If red X pressed then confirm if user wants to delete post*/}
      {showConfirmation && <ConfirmDeletion confirmObject={confirmProps} />}

      {/* All other post info besides title down here*/}
      <div className="flex gap-2">
        <h3>By: </h3>
        <Link
          href={`/user/${post.posterUsername}`}
          className="text-blue-600 duration-200 hover:scale-120 hover:underline"
        >
          {post.posterUsername}
        </Link>
      </div>
      <h3>Posted on: {formatDate(post.createdAt.toString())}</h3>
      <hr className="border"></hr>
      <p>{post.content}</p>
      <Like initialNumLikes={post.likeCount} initialLikeStatus={post.status} postId={post.id} />
      <CommentFeed initialCommentCount={post.commentCount} postId={post.id} />
    </div>
  )
}
