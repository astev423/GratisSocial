import * as z from 'zod';
export const FollowFindFirstResultSchema = z.nullable(z.object({
  id: z.string(),
  follower: z.unknown(),
  followerId: z.string(),
  personFollowed: z.unknown(),
  personFollowedId: z.string()
}));