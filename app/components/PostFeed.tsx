"use client"

import React, { useEffect, useState } from "react"
import Post from "./Post"

export type Post = {
  id: string
  posterUsername: string
  title: string
  content: string
  createdAt: string
  likes: number
  comments: number
}

// Union for enum like safety, prevent mispellings
type PostFeedProps = {
  postsToSee: "following" | "all" | "myPosts" | string
}

export default function PostFeed({ postsToSee }: PostFeedProps) {
  const [posts, setPosts] = useState<Post[]>([])

  // Fetch all posts depending on which posts selected in props
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/posts?type=${postsToSee}`)
      if (response.ok) {
        const data: Post[] = await response.json()
        setPosts(data.reverse())
      } else {
        alert(
          "Error, no posts to display. Follow users who have posted to see posts",
        )
      }
    }
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
            <Post post={post} key={post.id} />
          ))}
        </div>
      )}
    </div>
  )
}
