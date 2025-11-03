"use client"

import { useAuth } from "@clerk/nextjs"
import React, { useEffect, useState } from "react"

type User = {
  firstName: string
  lastName: string
  username: string
}

export const AccountInfo = () => {
  const [editableFirstName, setEditableFirstName] = useState("")
  const [editableLastName, setEditableLastName] = useState("")
  const [username, setUsername] = useState("")

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch("/api/fetchUser", {
        method: "POST",
      })
      if (response.ok) {
        const data: User = await response.json()
        setEditableFirstName(data.firstName)
        setEditableLastName(data.lastName)
        setUsername(data.username)
      }
    }
    fetchUser()
  }, [])

  return (
    <div className="flex gap-2 flex-col p-8 bg-white font-bold">
      <div className="p-2 text-2xl">
        Account information for <br></br>
        <div className="font-normal text-xl text-gray-700">
          {editableFirstName} {editableLastName}
        </div>
        <br></br>
        Unique username: <br></br>
        <div className="font-normal text-xl text-gray-700">{username}</div>
      </div>
      <div className="mt-2">You can change your name here</div>
      <div className="flex items-center justify-center">
        First name:&nbsp;&nbsp;
        <input
          value={editableFirstName}
          onChange={(event) => {
            setEditableFirstName(event.target.value)
          }}
          type="text"
          className="border-2"
          placeholder={editableFirstName}
        ></input>
      </div>
      <div className="flex items-center justify-center">
        Last name:&nbsp;&nbsp;
        <input
          value={editableLastName}
          onChange={(event) => {
            setEditableLastName(event.target.value)
          }}
          type="text"
          className="border-2"
          placeholder={editableLastName}
        ></input>
      </div>
      <button
        onClick={async () => {
          setEditableFirstName(editableFirstName)
          setEditableLastName(editableLastName)
          await fetch("/api/updateAccount", {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ editableFirstName, editableLastName }),
          })
        }}
        className="bg-gray-100 p-2 hover:cursor-pointer hover:bg-gray-200"
      >
        Click here to submit changes!
      </button>
    </div>
  )
}

export default AccountInfo
