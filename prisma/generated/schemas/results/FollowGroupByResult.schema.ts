import * as z from 'zod';
export const FollowGroupByResultSchema = z.array(z.object({
  id: z.string(),
  followerId: z.string(),
  personFollowedId: z.string(),
  _count: z.object({
    id: z.number(),
    follower: z.number(),
    followerId: z.number(),
    personFollowed: z.number(),
    personFollowedId: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    followerId: z.string().nullable(),
    personFollowedId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    followerId: z.string().nullable(),
    personFollowedId: z.string().nullable()
  }).nullable().optional()
}));