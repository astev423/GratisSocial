"use client"

import { useEffect, useState } from "react"

type User = {
  firstName: string
  lastName: string
  username: string
}

export default function EditableNameInfo() {
  const [editableFirstName, setEditableFirstName] = useState("Loading...")
  const [editableLastName, setEditableLastName] = useState("Loading...")
  const [username, setUsername] = useState("Loading...")
  const nameTooLongMessage = "First/Last names cannot be bigger than 20 characters"

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
    <div className="flex gap-2 w-90 flex-col p-8 bg-white font-bold">
      {/* Display account names and unique username */}
      <div className="p-2 gap-2 text-2xl">
        <span>Account information for </span>
        <div className="font-normal mb-4 text-xl text-gray-700">
          {editableFirstName} {editableLastName}
        </div>
        <span>Unique username:</span>
        <div className="font-normal text-xl text-gray-700">{username}</div>
      </div>
      <div className="mt-2">You can change your name here</div>

      <div className="firstNameSection flex items-center justify-center">
        <span>First name:</span>
        <input
          value={editableFirstName}
          onChange={(e) => {
            if (editableFirstName.length < 21) {
              setEditableFirstName(e.target.value)
            } else {
              alert(nameTooLongMessage)
            }
          }}
          type="text"
          className="border-2"
          placeholder={editableFirstName}
        ></input>
      </div>

      <div className="lastNameSection flex items-center justify-center">
        <span>Last name:</span>
        <input
          value={editableLastName}
          onChange={(e) => {
            if (editableLastName.length < 21) {
              setEditableLastName(e.target.value)
            } else {
              alert(nameTooLongMessage)
            }
          }}
          type="text"
          className="border-2"
          placeholder={editableLastName}
        ></input>
      </div>

      {/* Button for submitting PUT request to update names */}
      <button
        onClick={async () => {
          await fetch("/api/updateAccount", {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ editableFirstName, editableLastName }),
          })
        }}
        className="group grey-button"
      >
        <span className="grey-button-text">Click here to submit changes!</span>
      </button>
    </div>
  )
}
