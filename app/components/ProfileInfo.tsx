"use client"

import { useViewedUser } from "../context/ViewedUserContext"

export default function ProfileInfo() {
  const { viewedUser } = useViewedUser()

  return (
    <div className="flex w-90 gap-2 flex-col p-8 bg-white font-bold">
      <div className="p-2 text-2xl">
        Account information for <br></br>
        <div className="font-normal text-xl text-gray-700">
          {viewedUser.firstName} {viewedUser.lastName}
        </div>
        <br></br>
        Unique username: <br></br>
        <div className="font-normal text-xl text-gray-700">{viewedUser.username}</div>
      </div>
    </div>
  )
}
