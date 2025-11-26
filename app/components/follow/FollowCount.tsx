'use client'

import { useEffect, useState } from 'react'

type FollowInfo = {
  followers: number
  following: number
}

type FollowCountProps = {
  username: string
}

export default function FollowCount({ username }: FollowCountProps) {
  const [followInfo, setFollowInfo] = useState<FollowInfo | null>(null)

  async function fetchFollowInfo() {
    const response = await fetch('/api/fetchFollowInfo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(username),
    })
    if (!response.ok) {
      console.error('Failed to fetch follow info')
      return
    }

    const followInfoResponse = await response.json()
    setFollowInfo(followInfoResponse)
  }

  useEffect(() => {
    fetchFollowInfo()
  }, [])

  if (followInfo == null) {
    return <div className="bg-white font-bold">Error loading follower info</div>
  }

  return (
    <div>
      <div className="font-bold text-xl">Followers: {followInfo.followers}</div>
      <div className="font-bold text-xl">Following: {followInfo.following}</div>
    </div>
  )
}
