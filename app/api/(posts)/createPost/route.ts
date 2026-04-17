import { type NextRequest, NextResponse } from "next/server"
import z from "zod"
import { createPost, tryFetchUserByTheirId } from "@/lib/server/dbQueries"
import { PostContent } from "@/lib/types/apiTypes"

export async function POST(req: NextRequest) {
  const user = await tryFetchUserByTheirId()
  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 })
  }

  const result = PostContent.safeParse(await req.json())

  if (!result.success) {
    return NextResponse.json(
      {
        message: "Invalid post payload",
        errors: z.flattenError(result.error),
      },
      { status: 400 },
    )
  }

  const newPost = await createPost({
    title: result.data.title,
    content: result.data.content,
    authorId: user.id,
    posterUsername: user.username,
  })

  return NextResponse.json(newPost, { status: 201 })
}
