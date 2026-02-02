import { useState } from "react"
import { fetchComments } from "@/lib/client/utils"
import type { Comment as CommentType } from "@/types/types"
import AddComment from "./AddComment"
import Comment from "./Comment"

type CommentFeedProps = {
  initialCommentCount: number
  postId: string
}

export default function CommentFeed({ initialCommentCount, postId }: CommentFeedProps) {
  const [showComments, setShowComments] = useState(false)
  const [comments, setComments] = useState<CommentType[]>([])
  const [commentCount, setCommentCount] = useState(initialCommentCount)

  async function reloadComments() {
    const commentsOnThisPost = await fetchComments(postId)
    setComments(commentsOnThisPost)
  }

  return (
    <div className="flex flex-col gap-3">
      <button
        type="button"
        onClick={async () => {
          if (!showComments) {
            reloadComments()
          }
          setShowComments((showComments) => !showComments)
        }}
      >
        {/* TODO: Make this a dropdown with an arrow */}
        {commentCount} comments, click here to view them:
      </button>
      <AddComment setCommentCount={setCommentCount} reloadComments={reloadComments} postId={postId} />
      {showComments &&
        comments &&
        comments.map((comment) => (
          <Comment key={comment.id} commenterUsername={comment.commenterUsername} content={comment.content} />
        ))}
    </div>
  )
}
