import React from "react"

type ProfileInfoProps = {
  username: string
  firstName: string
  lastName: string
}

export default function ProfileInfo({
  username,
  firstName,
  lastName,
}: ProfileInfoProps) {
  return (
    <div className="flex gap-2 flex-col p-8 bg-white font-bold">
      <div className="p-2 text-2xl">
        Account information for <br></br>
        <div className="font-normal text-xl text-gray-700">
          {firstName} {lastName}
        </div>
        <br></br>
        Unique username: <br></br>
        <div className="font-normal text-xl text-gray-700">{username}</div>
      </div>
    </div>
  )
}
