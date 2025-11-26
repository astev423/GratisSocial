"use client"

import { useFetch } from "@/lib/client/utils"

type FollowInfo = {
  followers: number
  following: number
}

export default function FollowCount({ username }: { username: string }) {
  const { data } = useFetch<FollowInfo>("/api/fetchFollowInfo", { username })

  return (
    <>
      <div className="font-bold text-xl">Followers: {data?.followers}</div>
      <div className="font-bold text-xl">Following: {data?.following}</div>
    </>
  )
}
