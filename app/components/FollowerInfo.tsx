"use client"

import React, { useEffect, useState } from "react"

type followInfoType = {
  following: number
  followers: number
}

type followInfoProps = {
  username: string
}

export default function FollowerInfo({ username }: followInfoProps) {
  const [followers, setFollowers] = useState(0)
  const [following, setFollowing] = useState(0)

  // Fetch and set follow info
  useEffect(() => {
    const fetchFollowInfo = async () => {
      const response = await fetch("/api/fetchFollowInfo", {
        method: "POST",
        body: JSON.stringify({ username }),
      })
      if (!response.ok) {
        console.log("Couldn't fetch follow info for that username")
      }

      const data: followInfoType = await response.json()
      setFollowers(data.followers)
      setFollowing(data.following)
    }
    fetchFollowInfo()
  }, [])

  return (
    <div className="flex gap-2 flex-col p-8 whitespace-nowrap bg-white font-bold">
      <div className="font-bold text-2xl">Follower Information</div>
      <div className="font-bold text-xl">Followers: {followers}</div>
      <div className="font-bold text-xl">Following: {following}</div>
    </div>
  )
}
