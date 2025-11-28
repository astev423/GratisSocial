import Comment from "./Comment"

type CommentFeedProps = {
  commentCount: number
  commentIds: string[]
}

export default function CommentFeed({ commentCount, commentIds }: CommentFeedProps) {
  return (
    <div>
      <div>{commentCount} comments:</div>
      {commentIds.map((id) => (
        <Comment key={id} commentId={id} />
      ))}
    </div>
  )
}
