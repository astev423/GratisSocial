import * as z from 'zod';
// prettier-ignore
export const LikeInputSchema = z.object({
    id: z.string(),
    liked: z.boolean(),
    likerId: z.string(),
    liker: z.unknown(),
    postId: z.string(),
    post: z.unknown()
}).strict();

export type LikeInputType = z.infer<typeof LikeInputSchema>;
