"use client"

import { useEffect, useState } from "react"
import Post from "./Post"
import type { Post as PostType } from "../../types/types"

// Union for enum like safety, prevent mispellings
type PostFeedProps = {
  postsToSee: "following" | "all" | "myPosts" | "specificUser"
  username: string | undefined
}

export default function PostFeed({ postsToSee, username }: PostFeedProps) {
  const [posts, setPosts] = useState<PostType[]>([])

  async function fetchPosts(): Promise<void> {
    const url = username
      ? `/api/posts?type=${postsToSee}&username=${encodeURIComponent(username)}`
      : `/api/posts?type=${postsToSee}`

    const response = await fetch(url)
    if (!response.ok) {
      console.log("Failed to fetch posts in PostFeed")
      return
    }

    const data: PostType[] = await response.json()
    setPosts(data.reverse())
  }

  // Fetch all posts depending on which posts selected in props
  useEffect(() => {
    fetchPosts()
  }, [postsToSee])

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <div className="text-3xl bg-white p-5 w-150 text-center font-bold">
        Posts
      </div>
      {posts.length == 0 ? (
        <div className="bg-white p-5 text-center text-2xl gap-4 w-150">
          No posts found
        </div>
      ) : (
        <div className="flex flex-col gap-5">
          {posts.map((post) => (
            // Props get passed in as an object even if just one, key gets stripped out of obj
            <Post refetch={fetchPosts} post={post} key={post.id} />
          ))}
        </div>
      )}
    </div>
  )
}
