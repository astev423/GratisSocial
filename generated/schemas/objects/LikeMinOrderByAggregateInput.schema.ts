import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  liked: SortOrderSchema.optional(),
  likerId: SortOrderSchema.optional(),
  postId: SortOrderSchema.optional()
}).strict();
export const LikeMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.LikeMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.LikeMinOrderByAggregateInput>;
export const LikeMinOrderByAggregateInputObjectZodSchema = makeSchema();
