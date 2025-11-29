import type { Comment as CommentType } from "@/types/types"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import AddComment from "./AddComment"
import Comment from "./Comment"

type CommentFeedProps = {
  commentCount: number
  postId: string
  refetch: Dispatch<SetStateAction<number>>
}

export default function CommentFeed({ commentCount, refetch, postId }: CommentFeedProps) {
  const [comments, setComments] = useState<CommentType[] | null>(null)
  const [refresh, setRefresh] = useState(0)

  async function fetchComments() {
    const res = await fetch("/api/fetchComments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ postId }),
    })
    const { comments }: { comments: CommentType[] } = await res.json()
    setComments(comments)
  }

  useEffect(() => {
    fetchComments()
  }, [refresh])

  return (
    <div className="flex flex-col gap-3">
      <div>{commentCount} comments:</div>
      <AddComment refetch={refetch} setRefresh={setRefresh} postId={postId} />

      {/* Get all comments for current post if they exist */}
      {comments != null &&
        comments.map((comment) => (
          <Comment key={comment.id} commenterUsername={comment.commenterUsername} content={comment.content} />
        ))}
    </div>
  )
}
