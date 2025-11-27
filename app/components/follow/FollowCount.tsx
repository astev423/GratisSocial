"use client"

import { useViewedUser } from "@/app/context/ViewedUserContext"
import { fetchFollowInfo } from "@/lib/client/utils"
import { useEffect, useState } from "react"

export default function FollowCount() {
  const viewedUser = useViewedUser()
  const [followers, setFollowers] = useState(viewedUser.followersCount)
  const [following, setFollowing] = useState(viewedUser.followingCount)
  const { username } = viewedUser

  useEffect(() => {
    async function refetch() {
      const followInfo = await fetchFollowInfo(username)
      if (followInfo == null) {
        console.error("Error getting follow info")
        return
      }

      setFollowers(followInfo.followers)
      setFollowing(followInfo.following)
    }

    refetch()
  }, [])

  return (
    <>
      <div className="font-bold text-xl">Followers: {followers}</div>
      <div className="font-bold text-xl">Following: {following}</div>
    </>
  )
}
