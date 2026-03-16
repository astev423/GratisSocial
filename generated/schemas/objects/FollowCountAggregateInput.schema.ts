import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  followerId: z.literal(true).optional(),
  personFollowedId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const FollowCountAggregateInputObjectSchema: z.ZodType<Prisma.FollowCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.FollowCountAggregateInputType>;
export const FollowCountAggregateInputObjectZodSchema = makeSchema();
