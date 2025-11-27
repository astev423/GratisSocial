"use client"

import { useViewedUser } from "@/app/context/ViewedUserContext"

export default function FollowCount() {
  const { viewedUser } = useViewedUser()

  return (
    <>
      <div className="font-bold text-xl">Followers: {viewedUser.followersCount}</div>
      <div className="font-bold text-xl">Following: {viewedUser.followingCount}</div>
    </>
  )
}
