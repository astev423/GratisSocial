"use client"

import { useFetch } from "@/lib/client/utils"
import { Post as PostType, TypeOfPostToView } from "@/types/types"
import { useState } from "react"
import SpinningIcon from "../SpinningIcon"
import Post from "./Post"

// Union for enum like safety, prevent mispellings, question mark makes username optional
type PostFeedProps = {
  postsToSee: TypeOfPostToView
  username?: string | undefined
}

export default function PostFeed({ postsToSee, username = undefined }: PostFeedProps) {
  const [reloadPosts, setReloadPosts] = useState(0)
  const whiteBoxWithBoldText = "text-3xl bg-white p-5 text-center font-bold"
  const url = username
    ? `/api/posts?type=${postsToSee}&username=${encodeURIComponent(username)}`
    : `/api/posts?type=${postsToSee}`
  const { data: posts, loading, error } = useFetch<PostType[]>(url, "GET", { reloadPosts })

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center gap-5">
        <div className={`mb-20 w-full ${whiteBoxWithBoldText}`}>Posts</div>
        <SpinningIcon size={200} />
        <div className="flex flex-col gap-5 min-h-150"></div>
      </div>
    )
  } else if (posts == null) {
    return
  }

  return (
    <div className="gap-5 mb-100 ">
      <div className={`mb-5 ${whiteBoxWithBoldText}`}>Posts</div>

      {posts.length == 0 ? (
        <div className="gap-5">
          <div className={`${whiteBoxWithBoldText}`}>No posts found</div>
        </div>
      ) : (
        <div className="flex flex-col gap-5">
          {posts.map((post) => (
            // Props get passed in as an object even if just one, key gets stripped out of obj
            <Post refetch={setReloadPosts} post={post} key={post.id} />
          ))}
        </div>
      )}
    </div>
  )
}
