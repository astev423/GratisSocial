import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  liked: SortOrderSchema.optional(),
  likerId: SortOrderSchema.optional(),
  postId: SortOrderSchema.optional()
}).strict();
export const LikeMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.LikeMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.LikeMaxOrderByAggregateInput>;
export const LikeMaxOrderByAggregateInputObjectZodSchema = makeSchema();
