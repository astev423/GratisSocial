import React, { useEffect, useState } from "react"
import CommentFeed from "./CommentFeed"

type PostProps = {
  id: string
  username: string
  title: string
  content: string
  createdAt: string
  likes: number
  comments: number
}

const Post: React.FC<PostProps> = ({
  title,
  username,
  content,
  createdAt,
  likes,
  comments,
}) => {
  function formatDate(dateTimeString: string): string {
    const date = new Date(dateTimeString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
  }

  return (
    <div className="bg-white p-5 flex flex-col gap-4 w-150">
      <div className="font-bold text-4xl text-center">{title}</div>
      <div>By: {username}</div>
      <div>Posted on: {formatDate(createdAt)}</div>
      <div className="text-3xl font-bold border-b-2 pb-4"></div>
      <div>{content}</div>
      <div>Likes: {likes}</div>
      <div>comments: {comments}</div>
      <CommentFeed></CommentFeed>
    </div>
  )
}

export default Post
