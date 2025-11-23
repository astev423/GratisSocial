import CommentFeed from "./CommentFeed"
import { formatDate } from "@/lib/utils"
import type { Post as PostType } from "../../types/types"
import ConfirmPostDeletion from "./ConfirmPostDeletion"
import { useState } from "react"

type PostProps = Readonly<{
  postsToSee: string
  post: PostType
  refetch: () => void
}>

// Destructure from props as props are objects, THEN WE CAN DESTRUCTURE ITEMS, NOT BEFORE!
export default function Post({ post, postsToSee, refetch }: PostProps) {
  const { id, title, posterUsername, createdAt, content, likes, comments } =
    post
  const [showConfirmation, setShowConfirmation] = useState(false)

  return (
    <div className="bg-white p-5 flex flex-col gap-4 w-150">
      <div className="flex justify-between ">
        <div className="text-4xl font-bold">{title}</div>
        {postsToSee == "myPosts" ? (
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
          postId={id}
          setShowConfirmation={setShowConfirmation}
          refetch={refetch}
        />
      )}
      <div>By: {posterUsername}</div>
      <div>Posted on: {formatDate(createdAt)}</div>
      <div className="text-3xl font-bold border-b-2 pb-4"></div>
      <div>{content}</div>
      <div>Likes: {likes}</div>
      <div>comments: {comments}</div>
      <CommentFeed></CommentFeed>
    </div>
  )
}
