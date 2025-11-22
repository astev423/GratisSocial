import CommentFeed from "./CommentFeed"
import { formatDate } from "@/lib/utils"
import type { Post as PostType } from "../../types/types"

type PostProps = Readonly<{ post: PostType }>

// Destructure from props as props are objects, THEN WE CAN DESTRUCTURE ITEMS, NOT BEFORE!
export default function Post({ post }: PostProps) {
  const { title, posterUsername, createdAt, content, likes, comments } = post
  return (
    <div className="bg-white p-5 flex flex-col gap-4 w-150">
      <div className="font-bold text-4xl text-center">{title}</div>
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
