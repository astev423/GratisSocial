"use client"

import { useViewedUser } from "../context/ViewedUserContext"

export default function ProfileInfo() {
  const user = useViewedUser()
  return (
    <div className="flex w-90 gap-2 flex-col p-8 bg-white font-bold">
      <div className="p-2 text-2xl">
        Account information for <br></br>
        <div className="font-normal text-xl text-gray-700">
          {user.firstName} {user.lastName}
        </div>
        <br></br>
        Unique username: <br></br>
        <div className="font-normal text-xl text-gray-700">{user.username}</div>
      </div>
    </div>
  )
}
