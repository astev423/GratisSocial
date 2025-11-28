"use client"

import { useViewedUser } from "@/app/context/ViewedUserContext"
import { fetchFollowCount } from "@/lib/client/utils"
import { useEffect, useState } from "react"

export default function FollowCount() {
  const { viewedUser } = useViewedUser()
  const [followers, setFollowers] = useState(viewedUser.followersCount)
  const [following, setFollowing] = useState(viewedUser.followingCount)

  async function getFollowCount() {
    const followInfo = await fetchFollowCount(viewedUser.username)
    if (!followInfo) {
      return
    }

    setFollowers(followInfo.followers)
    setFollowing(followInfo.following)
  }

  useEffect(() => {
    getFollowCount()
  }, [])

  return (
    <>
      <div className="font-bold text-xl">Followers: {followers}</div>
      <div className="font-bold text-xl">Following: {following}</div>
    </>
  )
}
