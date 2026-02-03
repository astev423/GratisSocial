"use client"

import { useViewedUser } from "@/app/context/ViewedUserContext"
import { useFetch } from "@/lib/client/utils"
import type { FollowInfo } from "@/types/types"

export default function FollowCount() {
  const { viewedUser } = useViewedUser()
  const {
    data: followInfo,
    loading: _loading,
    error: _error,
  } = useFetch<FollowInfo>(`/api/fetchFollowCount/${encodeURIComponent(viewedUser.username)}`, "GET", 0)

  if (!followInfo) {
    return
  }

  return (
    <div className="text-xl">
      <p>Followers: {followInfo.followers}</p>
      <p>Following: {followInfo.following}</p>
    </div>
  )
}
