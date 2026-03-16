import * as z from 'zod';
export const LikeFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  liked: z.boolean(),
  likerId: z.string(),
  liker: z.unknown(),
  postId: z.string(),
  post: z.unknown()
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