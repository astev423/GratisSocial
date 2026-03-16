import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  content: z.literal(true).optional(),
  commenterUsername: z.literal(true).optional(),
  postId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const CommentCountAggregateInputObjectSchema: z.ZodType<Prisma.CommentCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CommentCountAggregateInputType>;
export const CommentCountAggregateInputObjectZodSchema = makeSchema();
