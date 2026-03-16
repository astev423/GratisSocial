import * as z from 'zod';
export const LikeUpsertResultSchema = z.object({
  id: z.string(),
  liked: z.boolean(),
  likerId: z.string(),
  liker: z.unknown(),
  postId: z.string(),
  post: z.unknown()
});