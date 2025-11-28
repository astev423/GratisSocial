"use client"

import { useEffect, useState } from "react"
import type { Post as PostType } from "../../../types/types"
import SpinningIcon from "../SpinningIcon"
import Post from "./Post"
import SortPostsBy from "./SortPostsBy"

// Union for enum like safety, prevent mispellings, question mark makes username optional
type PostFeedProps = {
  postsToSee: "Following" | "All" | "myPosts" | "specificUser"
  username?: string | undefined
}

export default function PostFeed({ postsToSee: seePosts, username = undefined }: PostFeedProps) {
  const [postsToSee, setpostsToSee] = useState(seePosts)
  const [posts, setPosts] = useState<PostType[]>([])
  const [loading, setLoading] = useState(true)
  const whiteBoxWithBoldText = "text-3xl bg-white p-5 text-center font-bold"

  async function fetchPosts(): Promise<void> {
    const url = username
      ? `/api/posts?type=${postsToSee}&username=${encodeURIComponent(username)}`
      : `/api/posts?type=${postsToSee}`

    const response = await fetch(url)
    if (!response.ok) {
      console.error("Failed to fetch posts in PostFeed")
      return
    }

    const data: PostType[] = await response.json()
    setPosts(data.reverse())
    setLoading(false)
  }

  // Fetch all posts depending on which posts selected in props
  useEffect(() => {
    fetchPosts()
  }, [postsToSee])

  if (loading) {
    return (
      <div className="flex flex-col justify-center w-[40vw] items-center gap-5">
        <div className={`mb-20 w-full ${whiteBoxWithBoldText}`}>Posts</div>
        <SpinningIcon size={200} />
        <div className="flex flex-col gap-5 min-h-150"></div>
      </div>
    )
  }

  if (posts.length == 0) {
    return (
      <div className="w-[40vw] gap-5">
        <div className={`${whiteBoxWithBoldText}`}>No posts found</div>
      </div>
    )
  }

  return (
    <div className="w-[40vw] gap-5">
      <div className={`mb-5 ${whiteBoxWithBoldText}`}>Posts</div>

      {/* Let user change which posts to see if they are on homepage */}
      {(postsToSee == "Following" || postsToSee == "All") && (
        <div className={`mb-5 `}>
          <SortPostsBy postsToSee={postsToSee} setPostsToSee={setpostsToSee}></SortPostsBy>
        </div>
      )}

      <div className="flex flex-col gap-5">
        {posts.map((post) => (
          // Props get passed in as an object even if just one, key gets stripped out of obj
          <Post refetch={fetchPosts} post={post} key={post.id} />
        ))}
      </div>
    </div>
  )
}
