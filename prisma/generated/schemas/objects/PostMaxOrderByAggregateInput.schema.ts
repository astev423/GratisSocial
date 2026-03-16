import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  content: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  authorId: SortOrderSchema.optional(),
  posterUsername: SortOrderSchema.optional(),
  commentCount: SortOrderSchema.optional(),
  likeCount: SortOrderSchema.optional()
}).strict();
export const PostMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PostMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PostMaxOrderByAggregateInput>;
export const PostMaxOrderByAggregateInputObjectZodSchema = makeSchema();
