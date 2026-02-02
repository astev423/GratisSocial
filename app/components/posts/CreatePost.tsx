import { type Dispatch, type SetStateAction, useState } from "react"
import { createPost } from "@/lib/client/utils"

type CreatePostProps = { setRefreshKey: Dispatch<SetStateAction<number>> }

export default function CreatePost({ setRefreshKey }: CreatePostProps) {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  async function submitPost(e: React.FormEvent) {
    e.preventDefault()

    if (!title || !content) {
      alert("You must provide both content and a title")
      return
    }

    createPost({ title, content })
    setTitle("")
    setContent("")
    setRefreshKey((refreshKey) => refreshKey + 1)
  }

  return (
    <form onSubmit={submitPost} className="bg-white flex flex-col gap-5 p-10 ">
      <div className="font-bold text-2xl">Create a new post!</div>
      <textarea
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Post title"
        className="bg-gray-100 p-4"
      ></textarea>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Post content"
        className="bg-gray-100 p-4 h-50"
      ></textarea>
      <button type="submit" className="group grey-button">
        <span className="grey-button-text">Submit Post</span>
      </button>
    </form>
  )
}
