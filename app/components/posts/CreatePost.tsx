import { type Dispatch, type SetStateAction, useState } from "react"
import { createPost } from "@/lib/client/utils"

type CreatePostProps = { setRefreshKey: Dispatch<SetStateAction<number>> }

export default function CreatePost({ setRefreshKey }: CreatePostProps) {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  async function submitPost(e: React.SubmitEvent) {
    e.preventDefault()
    await createPost({ title, body })
    setTitle("")
    setBody("")
    setRefreshKey((refreshKey) => refreshKey + 1)
  }

  return (
    <form onSubmit={submitPost} className="bg-white flex flex-col gap-5 p-10 ">
      <h2 className="font-bold text-2xl">Create a new post!</h2>

      <div className="flex flex-col gap-2">
        <label htmlFor="titleId">Post Title</label>
        <input
          value={title}
          id="titleId"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Your title here"
          className="bg-gray-100 p-4"
          name="title"
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="bodyId">Post Body</label>
        <textarea
          value={body}
          id="bodyId"
          onChange={(e) => setBody(e.target.value)}
          placeholder="Your post body here"
          className="bg-gray-100 p-4 h-50"
          name="body"
          required
        />
      </div>

      <button type="submit" className="group grey-button">
        <span className="grey-button-text">Submit Post</span>
      </button>
    </form>
  )
}
