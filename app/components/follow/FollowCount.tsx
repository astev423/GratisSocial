"use client"

import { useViewedUser } from "@/app/providers/ViewedUserContext"
import { useFetch } from "@/lib/client/utils"

type FollowInfo = {
  followers: number
  following: number
}

export default function FollowCount() {
  const { username } = useViewedUser()
  const { data, error } = useFetch<FollowInfo>("/api/fetchFollowInfo", { username })

  if (error) {
    return <div>Unexpected error getting follow count</div>
  }

  return (
    <>
      <div className="font-bold text-xl">Followers: {data?.followers}</div>
      <div className="font-bold text-xl">Following: {data?.following}</div>
    </>
  )
}
