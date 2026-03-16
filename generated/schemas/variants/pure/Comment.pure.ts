import * as z from 'zod';
// prettier-ignore
export const CommentModelSchema = z.object({
    id: z.string(),
    content: z.string(),
    commenterUsername: z.string(),
    commenter: z.unknown(),
    postId: z.string(),
    post: z.unknown()
}).strict();

export type CommentPureType = z.infer<typeof CommentModelSchema>;
