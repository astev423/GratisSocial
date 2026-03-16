import * as z from 'zod';
// prettier-ignore
export const FollowInputSchema = z.object({
    id: z.string(),
    follower: z.unknown(),
    followerId: z.string(),
    personFollowed: z.unknown(),
    personFollowedId: z.string()
}).strict();

export type FollowInputType = z.infer<typeof FollowInputSchema>;
