import * as z from 'zod';
// prettier-ignore
export const FollowModelSchema = z.object({
    id: z.string(),
    follower: z.unknown(),
    followerId: z.string(),
    personFollowed: z.unknown(),
    personFollowedId: z.string()
}).strict();

export type FollowPureType = z.infer<typeof FollowModelSchema>;
