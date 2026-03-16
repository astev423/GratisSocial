import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  title: z.literal(true).optional(),
  content: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  authorId: z.literal(true).optional(),
  posterUsername: z.literal(true).optional(),
  commentCount: z.literal(true).optional(),
  likeCount: z.literal(true).optional()
}).strict();
export const PostMaxAggregateInputObjectSchema: z.ZodType<Prisma.PostMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PostMaxAggregateInputType>;
export const PostMaxAggregateInputObjectZodSchema = makeSchema();
