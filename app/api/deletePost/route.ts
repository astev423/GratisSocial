import { NextResponse } from "next/server"
import { auth } from "@clerk/nextjs/server"
import { prisma } from "@/prisma/prisma"

// Delete post by id if userId matches poster
export async function POST(req: Request) {
  const { postId } = await req.json()
  const { userId } = await auth()
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const postToDelete = await prisma.post.delete({
    where: {
      userId: userId,
      id: postId,
    },
  })

  if (!postToDelete) {
    return NextResponse.json(
      { error: "Post id doesn't match user id" },
      { status: 400 },
    )
  }

  return NextResponse.json({ status: 200 })
}
