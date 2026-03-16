import * as z from 'zod';
export const CommentFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  content: z.string(),
  commenterUsername: z.string(),
  commenter: z.unknown(),
  postId: z.string(),
  post: z.unknown()
}));