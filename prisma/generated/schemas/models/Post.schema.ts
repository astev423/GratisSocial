import * as z from "zod"

export const PostSchema = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
  createdAt: z.date(),
  authorId: z.string(),
  posterUsername: z.string(),
  commentCount: z.number().int(),
  likeCount: z.number().int(),
})

export type PostType = z.infer<typeof PostSchema>
