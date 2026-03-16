import * as z from 'zod';
export const UserFindUniqueResultSchema = z.nullable(z.object({
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
}));