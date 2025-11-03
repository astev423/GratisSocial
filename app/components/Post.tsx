import React, { useEffect, useState } from "react"
import CommentFeed from "./CommentFeed"
import { formatDate } from "@/lib/utils"

type PostProps = {
  id: string
  posterUsername: string
  title: string
  content: string
  createdAt: string
  likes: number
  comments: number
}

export default function Post({
  id,
  posterUsername,
  title,
  content,
  createdAt,
  likes,
  comments,
}: PostProps) {
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
