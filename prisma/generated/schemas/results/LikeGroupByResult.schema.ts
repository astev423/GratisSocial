import * as z from 'zod';
export const LikeGroupByResultSchema = z.array(z.object({
  id: z.string(),
  liked: z.boolean(),
  likerId: z.string(),
  postId: z.string(),
  _count: z.object({
    id: z.number(),
    liked: z.number(),
    likerId: z.number(),
    liker: z.number(),
    postId: z.number(),
    post: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    likerId: z.string().nullable(),
    postId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    likerId: z.string().nullable(),
    postId: z.string().nullable()
  }).nullable().optional()
}));