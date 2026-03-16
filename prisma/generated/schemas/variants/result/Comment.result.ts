import * as z from 'zod';
// prettier-ignore
export const CommentResultSchema = z.object({
    id: z.string(),
    content: z.string(),
    commenterUsername: z.string(),
    commenter: z.unknown(),
    postId: z.string(),
    post: z.unknown()
}).strict();

export type CommentResultType = z.infer<typeof CommentResultSchema>;
