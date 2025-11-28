"use client"

import { useState } from "react"
import { useViewedUser } from "../context/ViewedUserContext"

export default function EditableNameInfo() {
  const { viewedUser } = useViewedUser()
  const [editableFirstName, setEditableFirstName] = useState(viewedUser.firstName)
  const [editableLastName, setEditableLastName] = useState(viewedUser.lastName)
  const nameTooLongMessage = "First/Last names cannot be bigger than 20 characters"

  return (
    <div className="flex gap-2 w-[25vw] flex-col p-8 bg-white font-bold">
      {/* Display account names and unique username */}
      <div className="p-2 gap-2 text-2xl">
        <span>Account information for </span>
        <div className="font-normal mb-4 text-xl text-gray-700">
          {editableFirstName} {editableLastName}
        </div>
        <span>Unique username:</span>
        <div className="font-normal text-xl text-gray-700">{viewedUser.username}</div>
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
          className="border-2 min-w-35"
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
          className="border-2 min-w-35"
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
