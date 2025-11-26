"use client"

import { useViewedUser } from "@/app/providers/ViewedUserContext"
import { useFetch } from "@/lib/client/utils"
import SpinningIcon from "../SpinningIcon"
import FollowButton from "./FollowButton"
import FollowCount from "./FollowCount"

type FollowStatus = {
  followStatus: "Following" | "Not Following"
}

export default function FollowInfo() {
  const { username } = useViewedUser()
  const { data, loading, error } = useFetch<FollowStatus>("/api/followStatus", { username })

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
      <FollowCount />
      <FollowButton following={isUserFollowing} />
    </>
  )
}
