import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const FollowOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.FollowOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.FollowOrderByRelationAggregateInput>;
export const FollowOrderByRelationAggregateInputObjectZodSchema = makeSchema();
