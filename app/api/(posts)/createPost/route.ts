import { NextRequest, NextResponse } from "next/server"

import { createPost, tryFetchUserByTheirId } from "@/lib/server/dbQueries"

export async function POST(req: NextRequest) {
  const user = await tryFetchUserByTheirId()
  if (user == null) {
    return NextResponse.json({ message: "User not found" }, { status: 404 })
  }

  const { title, content } = await req.json()
  if (!title || !content) {
    return NextResponse.json({ message: "Title and content are required." }, { status: 400 })
  }

  const newPost = await createPost({
    title: title,
    content: content,
    authorId: user.id,
    authorUsername: user.username,
  })

  return NextResponse.json(newPost, { status: 201 })
}
