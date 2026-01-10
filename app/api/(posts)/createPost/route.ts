import { NextResponse } from "next/server"

import { reqWithAuthWrapper } from "@/lib/server/api"
import { prisma } from "@/prisma/prisma"

// Securely get username from Id and set post and title to info in request body
export const POST = reqWithAuthWrapper(async (req, userId) => {
  const user = await prisma.user.findUnique({ where: { id: userId } })
  if (user == null) {
    return NextResponse.json({ message: "User not found" }, { status: 404 })
  }
  const { username } = user

  // Now that user is verified get title and post content info and upload it to DB
  const { title, content } = await req.json()
  if (!title || !content) {
    return NextResponse.json({ message: "Title and content are required." }, { status: 400 })
  }

  try {
    const newPost = await prisma.post.create({
      data: {
        title,
        content,
        author: {
          connect: { id: userId },
        },
        authorUsername: {
          connect: { username: username },
        },
      },
    })

    return NextResponse.json(newPost, { status: 201 })
  } catch (error) {
    return NextResponse.json({ message: `Error creating post. ${error}` }, { status: 500 })
  }
})
