import { NextResponse } from "next/server"
import { auth } from "@clerk/nextjs/server"
import { prisma } from "@/lib/prisma"

// Securely get username from Id and set post and title to info in request body
export async function POST(request: Request) {
  const { userId } = await auth()
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  // Fetch username off id we just validated
  const res = await fetch(new URL("/api/fetchUserIdProvided", request.url), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId }),
    cache: "no-store",
  })
  if (!res.ok) {
    const detail = await res.json().catch(() => null)
    return NextResponse.json(
      { message: "Failed to resolve username", detail },
      { status: 502 }
    )
  }
  const { username } = await res.json()

  // Now that user is verified get title and post content info and upload it to DB
  const { title, content } = await request.json()
  if (!title || !content) {
    return NextResponse.json(
      { message: "Title and content are required." },
      { status: 400 }
    )
  }

  try {
    const newPost = await prisma.post.create({
      data: {
        title,
        content,
        authorId: {
          connect: { id: userId },
        },
        likes: 0,
        comments: 0,
        authorUsername: {
          connect: { username: username },
        },
      },
    })

    return NextResponse.json(newPost, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { message: `Error creating post. ${error}` },
      { status: 500 }
    )
  }
}
