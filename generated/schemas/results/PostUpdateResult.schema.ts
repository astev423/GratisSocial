import * as z from 'zod';
export const PostUpdateResultSchema = z.nullable(z.object({
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
}));