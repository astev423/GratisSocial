"use client"

import { useState } from "react"
import CreatePost from "./CreatePost"
import PostFeed from "./PostFeed"

export default function FeedContainer() {
  // Keys trigger reload of component they are passed into when updated
  // Use server actions to refresh posts instead of client
  const [refreshKey, setRefreshKey] = useState(0)

  return (
    <div className="center-menu flex flex-col items-center justify-center gap-15 mt-20">
      <CreatePost setRefreshKey={setRefreshKey} />
      {/* Need refresh key prop to dismount and mount again so useEffect fetch can rerun */}
      <PostFeed key={refreshKey} postsToSee="All" />
    </div>
  )
}
