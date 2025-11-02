import { PrismaClient } from "../../../generated/prisma"
import { NextResponse } from "next/server"
import { auth } from "@clerk/nextjs/server"

const prisma = new PrismaClient()

export async function POST(request: Request) {
  const { title, content } = await request.json()
  const { userId } = await auth()

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  if (!title || !content) {
    return NextResponse.json(
      { message: "Title and content are required." },
      { status: 400 }
    )
  }
  // fetch username from your user endpoint
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
  const { username } = (await res.json()) as { username: string }

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
  } finally {
    await prisma.$disconnect()
  }
}
