"use client"

import { useState } from "react"
import { type Dispatch, type SetStateAction } from "react"

type CreatePostProps = { setRefreshKey: Dispatch<SetStateAction<number>> }

export default function CreatePost({ setRefreshKey }: CreatePostProps) {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  //submit post using prisma client
  async function submitPost() {
    if (!title || !content) {
      alert("You must provide both content and a title")
      return
    }

    const response = await fetch("/api/createPost", {
      // Call your API route
      method: "POST",
      body: JSON.stringify({ title, content }),
    })
    if (!response.ok) {
      console.log("CreatePost API call had error")
      return
    }

    // Clear form after post for next post
    setTitle("")
    setContent("")
    // Stateful functions are special and can affect value even if state isnt in this component
    setRefreshKey((refreshKey) => refreshKey + 1)
  }

  return (
    <div className="bg-white flex flex-col gap-5 p-10 w-150">
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
      <button
        onClick={submitPost}
        className="group bg-gray-400 p-5 hover:cursor-pointer hover:bg-gray-600"
      >
        <span className="group-hover:scale-130 duration-200 inline-block hover:scale-130">
          Submit Post
        </span>
      </button>
    </div>
  )
}
