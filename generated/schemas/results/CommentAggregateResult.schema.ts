import * as z from 'zod';
export const CommentAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    content: z.number(),
    commenterUsername: z.number(),
    commenter: z.number(),
    postId: z.number(),
    post: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    content: z.string().nullable(),
    commenterUsername: z.string().nullable(),
    postId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    content: z.string().nullable(),
    commenterUsername: z.string().nullable(),
    postId: z.string().nullable()
  }).nullable().optional()});