"use client"

import { useState } from "react"
import { updateAccount } from "@/lib/client/utils"
import { useViewedUser } from "../context/ViewedUserContext"

type NameFieldProps = {
  label: string
  value: string
  onChange: (next: string) => void
}

function NameField({ label, value, onChange }: NameFieldProps) {
  return (
    <div>
      <span>{label} </span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type="text"
        className="border-2 p-1"
        maxLength={20}
        required
      />
    </div>
  )
}

export default function EditableNameInfo() {
  const { viewedUser } = useViewedUser()
  const [editableFirstName, setEditableFirstName] = useState(viewedUser.firstName)
  const [editableLastName, setEditableLastName] = useState(viewedUser.lastName)

  async function handleSubmitNameChange(e: React.SubmitEvent) {
    e.preventDefault()
    await updateAccount({ editableFirstName, editableLastName })
  }

  return (
    <div className="flex gap-6 flex-col p-6 bg-white font-bold">
      <div>
        <h2>Account information for </h2>
        <p className="font-normal text-gray-700">
          {editableFirstName} {editableLastName}
        </p>
      </div>
      <div>
        <h2>Unique username:</h2>
        <p className="font-normal text-gray-700">{viewedUser.username}</p>
      </div>

      <form className="flex flex-col gap-2" onSubmit={handleSubmitNameChange}>
        <h3>You can change your name here</h3>

        <NameField label="First name:" value={editableFirstName} onChange={setEditableFirstName} />

        <NameField label="Last name:" value={editableLastName} onChange={setEditableLastName} />

        <button type="submit" className="group grey-button">
          <span className="grey-button-text">Click here to submit changes!</span>
        </button>
      </form>
    </div>
  )
}
