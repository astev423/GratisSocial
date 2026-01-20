import { useState } from "react"
import { createComment } from "@/lib/client/utils"

type AddCommentProps = {
  postId: string
  reloadComments: () => void
}

export default function AddComment({ postId, reloadComments }: AddCommentProps) {
  const [inputText, setInputText] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (inputText === "") {
      console.error("Comments can't be empty")
      return
    }
    const res = await createComment(inputText, postId)
    if (!res) {
      console.error("Failed to make comment!")
      return
    }

    setInputText("")
    reloadComments()
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
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
