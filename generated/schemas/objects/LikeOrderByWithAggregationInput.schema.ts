import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { LikeCountOrderByAggregateInputObjectSchema as LikeCountOrderByAggregateInputObjectSchema } from './LikeCountOrderByAggregateInput.schema';
import { LikeMaxOrderByAggregateInputObjectSchema as LikeMaxOrderByAggregateInputObjectSchema } from './LikeMaxOrderByAggregateInput.schema';
import { LikeMinOrderByAggregateInputObjectSchema as LikeMinOrderByAggregateInputObjectSchema } from './LikeMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  liked: SortOrderSchema.optional(),
  likerId: SortOrderSchema.optional(),
  postId: SortOrderSchema.optional(),
  _count: z.lazy(() => LikeCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => LikeMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => LikeMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const LikeOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.LikeOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.LikeOrderByWithAggregationInput>;
export const LikeOrderByWithAggregationInputObjectZodSchema = makeSchema();
