import * as z from 'zod';
export const LikeAggregateResultSchema = z.object({  _count: z.object({
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
  }).nullable().optional()});