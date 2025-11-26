"use client"

import { useFetch } from "@/lib/client/utils"
import SpinningIcon from "../SpinningIcon"
import FollowButton from "./FollowButton"
import FollowCount from "./FollowCount"

type FollowStatus = {
  followStatus: "Following" | "Not Following"
}

export default function FollowInfo({ username }: { username: string }) {
  const { data, loading, error } = useFetch<FollowStatus>("/api/followStatus", { username })
  const isUserFollowing = data?.followStatus == "Following"

  if (error) {
    return <div className="text-xl">Failed to find follow info</div>
  } else if (loading) {
    return (
      <div className="flex mt-5 justify-center items-center gap-2">
        <SpinningIcon size={100} />
      </div>
    )
  }

  return (
    <>
      <FollowCount username={username} />
      <FollowButton following={isUserFollowing} />
    </>
  )
}
