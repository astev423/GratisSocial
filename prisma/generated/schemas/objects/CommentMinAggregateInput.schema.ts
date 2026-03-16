import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  content: z.literal(true).optional(),
  commenterUsername: z.literal(true).optional(),
  postId: z.literal(true).optional()
}).strict();
export const CommentMinAggregateInputObjectSchema: z.ZodType<Prisma.CommentMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CommentMinAggregateInputType>;
export const CommentMinAggregateInputObjectZodSchema = makeSchema();
