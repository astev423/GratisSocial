import * as z from 'zod';
// prettier-ignore
export const PostModelSchema = z.object({
    id: z.string(),
    title: z.string(),
    content: z.string(),
    createdAt: z.date(),
    authorId: z.string(),
    author: z.unknown(),
    authorUsername: z.unknown(),
    posterUsername: z.string(),
    commentCount: z.number().int(),
    comments: z.array(z.unknown()),
    likeCount: z.number().int(),
    likes: z.array(z.unknown())
}).strict();

export type PostPureType = z.infer<typeof PostModelSchema>;
