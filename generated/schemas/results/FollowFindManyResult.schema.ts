import * as z from 'zod';
export const FollowFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  follower: z.unknown(),
  followerId: z.string(),
  personFollowed: z.unknown(),
  personFollowedId: z.string()
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