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
  const body = await req.json()
  const result = PostSchema.safeParse(body)

  if (!result.success) {
    return NextResponse.json(
      {
        message: "Invalid post payload",
        errors: z.flattenError(result.error),
      },
      { status: 400 },
    )
  }

  await deletePost(result.data.postId, userId)

  return NextResponse.json({ status: 200 })
})
