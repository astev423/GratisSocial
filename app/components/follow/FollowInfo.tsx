"use client"

import { useState } from "react"
import { useViewedUser } from "@/app/context/ViewedUserContext"
import { useFetch } from "@/lib/client/utils"
import SpinningIcon from "../SpinningIcon"
import FollowButton from "./FollowButton"
import FollowCount from "./FollowCount"

type FollowInfo = {
  followStatus: "following" | "notFollowing"
}

export default function FollowInfo() {
  const {
    viewedUser: { username },
  } = useViewedUser()
  const [refreshKey, setRefreshKey] = useState(0)
  const { data, loading, error } = useFetch<FollowInfo>(`/api/followStatus/${username}`, "GET", refreshKey)

  if (error) {
    return <p className="font-normal">Failed to find follow info</p>
  } else if (loading) {
    return (
      <div className="mx-auto">
        <SpinningIcon size={100} />
      </div>
    )
  }

  const isUserFollowing = data?.followStatus === "following"

  return (
    <div>
      <FollowCount />
      <FollowButton setRefreshKey={setRefreshKey} following={isUserFollowing} />
    </div>
  )
}
