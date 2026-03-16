import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  followerId: SortOrderSchema.optional(),
  personFollowedId: SortOrderSchema.optional()
}).strict();
export const FollowMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.FollowMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.FollowMinOrderByAggregateInput>;
export const FollowMinOrderByAggregateInputObjectZodSchema = makeSchema();
