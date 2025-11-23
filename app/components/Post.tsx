import CommentFeed from "./CommentFeed"
import { formatDate } from "@/lib/utils"
import type { Post as PostType } from "../../types/types"
import ConfirmPostDeletion from "./ConfirmPostDeletion"
import { useState } from "react"
import { useAuth } from "@clerk/nextjs"

type PostProps = Readonly<{
  post: PostType
  refetch: () => void
}>

export default function Post({ post, refetch }: PostProps) {
  const { userId } = useAuth()
  const [showConfirmation, setShowConfirmation] = useState(false)

  // Maybe split this up into title section and other stuff
  return (
    <div className="bg-white p-5 flex flex-col gap-4 w-150">
      <div className="flex justify-between ">
        <div className="text-4xl font-bold">{post.title}</div>
        {post.userId == userId ? (
          <div
            onClick={() => setShowConfirmation(true)}
            className="self-start text-3xl hover:brightness-50 hover:scale-140 hover:cursor-pointer"
          >
            ❌
          </div>
        ) : null}
      </div>
      {showConfirmation && (
        <ConfirmPostDeletion
          postId={post.id}
          setShowConfirmation={setShowConfirmation}
          refetch={refetch}
        />
      )}
      <div>By: {post.posterUsername}</div>
      <div>Posted on: {formatDate(post.createdAt)}</div>
      <div className="text-3xl font-bold border-b-2 pb-4"></div>
      <div>{post.content}</div>
      <div>Likes: {post.likes}</div>
      <div>comments: {post.comments}</div>
      <CommentFeed></CommentFeed>
    </div>
  )
}
