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
        <div className="flex flex-col gap-2">
          <label htmlFor="bodyId">Add Comment</label>
          <input
            id="bodyId"
            className="border-2 rounded-xl p-1 w-[15vw]"
            type="text"
            placeholder="Your comment here"
            value={inputText}
            onChange={(e) => {
              setInputText(e.target.value)
            }}
            required
          />
        </div>
      </form>
    </div>
  )
}
