import { fetchComments } from "@/lib/client/utils"
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
  const [refresh, setRefresh] = useState(0)
  const [showComments, setShowComments] = useState(false)
  const [comments, setComments] = useState<CommentType[]>([])

  useEffect(() => {
    ;(async () => {
      const commentsOnThisPost = await fetchComments(postId)
      setComments(commentsOnThisPost)
    })()
  }, [refresh])

  return (
    <div className="flex flex-col gap-3">
      <div
        onClick={async () => {
          if (!showComments) {
            setRefresh((refresh) => refresh + 1)
          }
          setShowComments((showComments) => !showComments)
        }}
      >
        {commentCount} comments, click here to view them:
      </div>
      <AddComment refetch={refetch} setRefresh={setRefresh} postId={postId} />
      {showComments &&
        comments &&
        comments.map((comment) => (
          <Comment key={comment.id} commenterUsername={comment.commenterUsername} content={comment.content} />
        ))}
    </div>
  )
}
