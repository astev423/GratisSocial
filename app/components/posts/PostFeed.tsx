"use client"

import { useFetch } from "@/lib/client/utils"
import { PostWithLikeInfo, TypeOfPostToView } from "@/types/types"
import { useState } from "react"
import SpinningIcon from "../SpinningIcon"
import Post from "./Post"

type PostFeedProps = {
  postsToSee: TypeOfPostToView
  username?: string | undefined
}

export default function PostFeed({ postsToSee, username = undefined }: PostFeedProps) {
  const [reloadPosts, setReloadPosts] = useState(0)
  const whiteBoxWithBoldText = "text-3xl bg-white p-5 text-center font-bold"
  const url = username
    ? `/api/fetchPostInfo?type=${postsToSee}&username=${encodeURIComponent(username)}`
    : `/api/fetchPostInfo?type=${postsToSee}`
  const { data: posts, loading, error } = useFetch<PostWithLikeInfo[]>(url, "GET", reloadPosts)

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center gap-5">
        <div className={`mb-20 w-full ${whiteBoxWithBoldText}`}>Posts</div>
        <SpinningIcon size={200} />
      </div>
    )
  } else if (posts == null) {
    return
  }

  return (
    <div className="mb-100">
      <div className={`mb-5 ${whiteBoxWithBoldText}`}>Posts</div>

      {posts.length == 0 ? (
        <div>
          <div className={`${whiteBoxWithBoldText}`}>No posts found</div>
        </div>
      ) : (
        <div className="flex flex-col gap-5">
          {posts.map((post) => (
            <Post refetch={setReloadPosts} post={post} key={post.id} />
          ))}
        </div>
      )}
    </div>
  )
}
