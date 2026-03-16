import * as z from 'zod';
export const UserAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    email: z.number(),
    username: z.number(),
    firstName: z.number(),
    lastName: z.number(),
    createdAt: z.number(),
    postsById: z.number(),
    postsByUsername: z.number(),
    followers: z.number(),
    following: z.number(),
    followersCount: z.number(),
    followingCount: z.number(),
    comments: z.number(),
    likes: z.number()
  }).optional(),
  _sum: z.object({
    followersCount: z.number().nullable(),
    followingCount: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    followersCount: z.number().nullable(),
    followingCount: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    email: z.string().nullable(),
    username: z.string().nullable(),
    firstName: z.string().nullable(),
    lastName: z.string().nullable(),
    createdAt: z.date().nullable(),
    followersCount: z.number().int().nullable(),
    followingCount: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    email: z.string().nullable(),
    username: z.string().nullable(),
    firstName: z.string().nullable(),
    lastName: z.string().nullable(),
    createdAt: z.date().nullable(),
    followersCount: z.number().int().nullable(),
    followingCount: z.number().int().nullable()
  }).nullable().optional()});