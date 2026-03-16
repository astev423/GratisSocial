import * as z from 'zod';

export const CommentSchema = z.object({
  id: z.string(),
  content: z.string(),
  commenterUsername: z.string(),
  postId: z.string(),
});

export type CommentType = z.infer<typeof CommentSchema>;
