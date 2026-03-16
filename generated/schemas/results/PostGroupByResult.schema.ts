import * as z from 'zod';
export const PostGroupByResultSchema = z.array(z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
  createdAt: z.date(),
  authorId: z.string(),
  posterUsername: z.string(),
  commentCount: z.number().int(),
  likeCount: z.number().int(),
  _count: z.object({
    id: z.number(),
    title: z.number(),
    content: z.number(),
    createdAt: z.number(),
    authorId: z.number(),
    author: z.number(),
    authorUsername: z.number(),
    posterUsername: z.number(),
    commentCount: z.number(),
    comments: z.number(),
    likeCount: z.number(),
    likes: z.number()
  }).optional(),
  _sum: z.object({
    commentCount: z.number().nullable(),
    likeCount: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    commentCount: z.number().nullable(),
    likeCount: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    title: z.string().nullable(),
    content: z.string().nullable(),
    createdAt: z.date().nullable(),
    authorId: z.string().nullable(),
    posterUsername: z.string().nullable(),
    commentCount: z.number().int().nullable(),
    likeCount: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    title: z.string().nullable(),
    content: z.string().nullable(),
    createdAt: z.date().nullable(),
    authorId: z.string().nullable(),
    posterUsername: z.string().nullable(),
    commentCount: z.number().int().nullable(),
    likeCount: z.number().int().nullable()
  }).nullable().optional()
}));