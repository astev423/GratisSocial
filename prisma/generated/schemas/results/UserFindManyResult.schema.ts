import * as z from 'zod';
export const UserFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  email: z.string(),
  username: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  createdAt: z.date(),
  postsById: z.array(z.unknown()),
  postsByUsername: z.array(z.unknown()),
  followers: z.array(z.unknown()),
  following: z.array(z.unknown()),
  followersCount: z.number().int(),
  followingCount: z.number().int(),
  comments: z.array(z.unknown()),
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