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
export const PostMinAggregateInputObjectSchema: z.ZodType<Prisma.PostMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PostMinAggregateInputType>;
export const PostMinAggregateInputObjectZodSchema = makeSchema();
