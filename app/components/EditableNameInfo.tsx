"use client"

import { useState } from "react"
import { updateAccount } from "@/lib/client/utils"
import { useViewedUser } from "../context/ViewedUserContext"

const MAX_NAME_LEN = 20
const NAME_TOO_LONG_MESSAGE = `First/Last names cannot be bigger than ${MAX_NAME_LEN} characters`

type NameFieldProps = {
  label: string
  value: string
  onChange: (next: string) => void
}

function NameField({ label, value, onChange }: NameFieldProps) {
  return (
    <div className="flex items-center justify-center gap-2">
      <span>{label}</span>
      <input value={value} onChange={(e) => onChange(e.target.value)} type="text" className="border-2" />
    </div>
  )
}

export default function EditableNameInfo() {
  const { viewedUser } = useViewedUser()
  const [editableFirstName, setEditableFirstName] = useState(viewedUser.firstName)
  const [editableLastName, setEditableLastName] = useState(viewedUser.lastName)
  const handleNameChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (next: string) => {
    if (next.length > MAX_NAME_LEN) {
      alert(NAME_TOO_LONG_MESSAGE)
      return
    }

    setter(next)
  }

  return (
    <div className="flex gap-2 flex-col p-8 bg-white font-bold">
      <div className="p-2 gap-2 text-2xl">
        <span>Account information for </span>
        <div className="font-normal mb-4 text-xl text-gray-700">
          {editableFirstName} {editableLastName}
        </div>
        <span>Unique username:</span>
        <div className="font-normal text-xl text-gray-700">{viewedUser.username}</div>
      </div>
      <div className="mt-2">You can change your name here</div>
      <NameField
        label="First name:"
        value={editableFirstName}
        onChange={handleNameChange(setEditableFirstName)}
      />
      <NameField
        label="Last name:"
        value={editableLastName}
        onChange={handleNameChange(setEditableLastName)}
      />
      <button
        type="button"
        onClick={async () => {
          await updateAccount({ editableFirstName, editableLastName })
        }}
        className="group grey-button"
      >
        <span className="grey-button-text">Click here to submit changes!</span>
      </button>
    </div>
  )
}
