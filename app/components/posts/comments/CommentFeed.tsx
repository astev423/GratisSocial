import { useFetch } from "@/lib/client/utils"
import type { Comment as CommentType } from "@/types/types"
import { Dispatch, SetStateAction, useState } from "react"
import AddComment from "./AddComment"
import Comment from "./Comment"

type CommentFeedProps = {
  commentCount: number
  postId: string
  refetch: Dispatch<SetStateAction<number>>
}

export default function CommentFeed({ commentCount, refetch, postId }: CommentFeedProps) {
  const [refresh, setRefresh] = useState(0)
  const {
    data: comments,
    loading,
    error,
  } = useFetch<CommentType[]>("/api/fetchComments", "POST", refresh, { postId })

  return (
    <div className="flex flex-col gap-3">
      <div>{commentCount} comments:</div>
      <AddComment refetch={refetch} setRefresh={setRefresh} postId={postId} />

      {comments &&
        comments.map((comment) => (
          <Comment key={comment.id} commenterUsername={comment.commenterUsername} content={comment.content} />
        ))}
    </div>
  )
}
