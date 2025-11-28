"use client"

import { createComment } from "@/lib/client/utils"
import { Dispatch, SetStateAction, useState } from "react"

type AddCommentProps = {
  postId: string
  setRefresh: Dispatch<SetStateAction<number>>
}

export default function AddComment({ postId, setRefresh }: AddCommentProps) {
  const [inputText, setInputText] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    createComment(inputText, postId)
    setInputText("")
    setRefresh((i) => i + 1)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="border-2 rounded-xl p-1 w-[10vw]"
          type="text"
          placeholder="Add comment"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value)
          }}
        ></input>
      </form>
    </div>
  )
}
