"use client"

import React, { useEffect, useState } from "react"

type followInfoType = {
  following: number
  followers: number
}

export default function FollowerInfo(username: string) {
  const [followInfo, setFollowInfo] = useState<followInfoType>({
    following: 0,
    followers: 0,
  })

  // Fetch and set follow info
  useEffect(() => {
    const fetchFollowInfo = async () => {
      const response = await fetch(`/api/fetchFollowInfo?userId=${userId}`)
      if (response.ok) {
        const data: followInfoType = await response.json()
        setFollowInfo(data)
      }
    }
    fetchFollowInfo()
  }, [])
  const { followers, following } = followInfo

  return (
    <div className="flex gap-2 flex-col p-8 whitespace-nowrap bg-white font-bold">
      <div className="font-bold text-2xl">Follower Information</div>
      <div className="font-bold text-xl">Followers: {followers}</div>
      <div className="font-bold text-xl">Following: {following}</div>
    </div>
  )
}
