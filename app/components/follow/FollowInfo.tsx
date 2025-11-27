"use client"

import { useViewedUser } from "@/app/context/ViewedUserContext"
import { useFetch } from "@/lib/client/utils"
import { useState } from "react"
import SpinningIcon from "../SpinningIcon"
import FollowButton from "./FollowButton"
import FollowCount from "./FollowCount"

type FollowStatus = {
  followStatus: "Following" | "Not Following"
}

// This uses a refresh key to update refetch in follow count when button is pressed
export default function FollowInfo() {
  const { username } = useViewedUser()
  const [refreshKey, setRefreshKey] = useState(0)
  const { data, loading, error } = useFetch<FollowStatus>("/api/followStatus", { username, refreshKey })

  if (error) {
    return <div className="text-xl">Failed to find follow info</div>
  } else if (loading) {
    return (
      <div className="flex mt-5 justify-center items-center gap-2">
        <SpinningIcon size={100} />
      </div>
    )
  }

  const isUserFollowing = data?.followStatus == "Following"

  return (
    <>
      <FollowCount key={refreshKey} />
      <FollowButton setRefreshKey={setRefreshKey} following={isUserFollowing} />
    </>
  )
}
