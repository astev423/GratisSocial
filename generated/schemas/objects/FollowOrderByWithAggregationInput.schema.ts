import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { FollowCountOrderByAggregateInputObjectSchema as FollowCountOrderByAggregateInputObjectSchema } from './FollowCountOrderByAggregateInput.schema';
import { FollowMaxOrderByAggregateInputObjectSchema as FollowMaxOrderByAggregateInputObjectSchema } from './FollowMaxOrderByAggregateInput.schema';
import { FollowMinOrderByAggregateInputObjectSchema as FollowMinOrderByAggregateInputObjectSchema } from './FollowMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  followerId: SortOrderSchema.optional(),
  personFollowedId: SortOrderSchema.optional(),
  _count: z.lazy(() => FollowCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => FollowMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => FollowMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const FollowOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.FollowOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.FollowOrderByWithAggregationInput>;
export const FollowOrderByWithAggregationInputObjectZodSchema = makeSchema();
