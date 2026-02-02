import { type NextRequest, NextResponse } from "next/server"

import { createPost, tryFetchUserByTheirId } from "@/lib/server/dbQueries"

export async function POST(req: NextRequest) {
  const user = await tryFetchUserByTheirId()
  if (user === null) {
    return NextResponse.json({ message: "User not found" }, { status: 404 })
  }

  const { title, body } = (await req.json()) as { title: string; body: string }
  if (!title || !body) {
    return NextResponse.json({ message: "Title and content are required." }, { status: 400 })
  }

  const newPost = await createPost({
    title: title,
    content: body,
    authorId: user.id,
    posterUsername: user.username,
  })

  return NextResponse.json(newPost, { status: 201 })
}
