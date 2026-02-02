import { type Dispatch, type SetStateAction, useState } from "react"
import { createComment } from "@/lib/client/utils"

type AddCommentProps = {
  postId: string
  reloadComments: () => void
  setCommentCount: Dispatch<SetStateAction<number>>
}

export default function AddComment({ postId, reloadComments, setCommentCount }: AddCommentProps) {
  const [inputText, setInputText] = useState("")

  async function handleSubmitNewComment(e: React.FormEvent) {
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
    setCommentCount((i) => i + 1)
    reloadComments()
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmitNewComment(e)}>
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
