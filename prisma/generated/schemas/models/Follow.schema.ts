import * as z from 'zod';

export const FollowSchema = z.object({
  id: z.string(),
  followerId: z.string(),
  personFollowedId: z.string(),
});

export type FollowType = z.infer<typeof FollowSchema>;
