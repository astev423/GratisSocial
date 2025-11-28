import { useEffect, useState } from "react"

type CommentProps = {
  content: string
  commenterId: string
}

export default function Comment({ content, commenterId }: CommentProps) {
  const [username, setUsername] = useState("")

  async function fetchUsername() {
    const userId = commenterId
    const response = await fetch("/api/fetchUserIdProvided", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId }),
    })
    const { username } = await response.json()
    setUsername(username)
  }

  useEffect(() => {
    fetchUsername()
  }, [])

  return (
    <div>
      <div>{username} says: </div>
      <div>{content}</div>
    </div>
  )
}
