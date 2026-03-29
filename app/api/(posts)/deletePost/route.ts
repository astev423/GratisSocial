import { NextResponse } from "next/server"
import z from "zod"
import { reqWithAuthWrapper } from "@/lib/server/api"
import { deletePost } from "@/lib/server/dbQueries"

const PostSchema = z
  .object({
    postId: z.string().trim().min(1, "PostID is required"),
  })
  .strict()

export const DELETE = reqWithAuthWrapper(async (req, userId) => {
  const { postId } = (await req.json()) as { postId: string }
  await deletePost(postId, userId)
  const result = PostSchema.safeParse(await req.json())

  if (!result.success) {
    return NextResponse.json(
      {
        message: "Invalid post payload",
        errors: z.flattenError(result.error),
      },
      { status: 400 },
    )
  }

  return NextResponse.json({ status: 200 })
})
