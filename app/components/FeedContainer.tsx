"use client"

import { useState } from "react"
import CreatePost from "./CreatePost"
import PostFeed from "./PostFeed"

export default function FeedContainer() {
  // Keys trigger reload of component they are passed into
  // Use server actions to refresh posts instead of client
  const [refreshKey, setRefreshKey] = useState(0)

  return (
    <div className="center-menu flex flex-col items-center justify-center gap-15 mt-20">
      <CreatePost onPost={() => setRefreshKey((prev) => prev + 1)} />
      <PostFeed postsToSee="following" />
    </div>
  )
}
