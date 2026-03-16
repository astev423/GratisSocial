import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  content: SortOrderSchema.optional(),
  commenterUsername: SortOrderSchema.optional(),
  postId: SortOrderSchema.optional()
}).strict();
export const CommentMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CommentMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentMinOrderByAggregateInput>;
export const CommentMinOrderByAggregateInputObjectZodSchema = makeSchema();
