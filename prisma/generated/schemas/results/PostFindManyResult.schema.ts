import * as z from 'zod';
export const PostFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
  createdAt: z.date(),
  authorId: z.string(),
  author: z.unknown(),
  authorUsername: z.unknown(),
  posterUsername: z.string(),
  commentCount: z.number().int(),
  comments: z.array(z.unknown()),
  likeCount: z.number().int(),
  likes: z.array(z.unknown())
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});