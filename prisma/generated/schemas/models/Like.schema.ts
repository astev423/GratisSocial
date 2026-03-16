import * as z from 'zod';

export const LikeSchema = z.object({
  id: z.string(),
  liked: z.boolean(),
  likerId: z.string(),
  postId: z.string(),
});

export type LikeType = z.infer<typeof LikeSchema>;
