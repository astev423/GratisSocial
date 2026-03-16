import * as z from 'zod';
// prettier-ignore
export const FollowResultSchema = z.object({
    id: z.string(),
    follower: z.unknown(),
    followerId: z.string(),
    personFollowed: z.unknown(),
    personFollowedId: z.string()
}).strict();

export type FollowResultType = z.infer<typeof FollowResultSchema>;
