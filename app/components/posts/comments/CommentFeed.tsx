import { Comment as CommentType } from "@/types/types"
import { useEffect, useState } from "react"
import AddComment from "./AddComment"
import Comment from "./Comment"

type CommentFeedProps = {
  commentCount: number
  postId: string
}

export default function CommentFeed({ commentCount, postId }: CommentFeedProps) {
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
      <AddComment setRefresh={setRefresh} postId={postId} />
      {comments != null &&
        comments.map((comment) => (
          <Comment key={comment.id} commenterId={comment.commenterId} content={comment.content} />
        ))}
    </div>
  )
}
