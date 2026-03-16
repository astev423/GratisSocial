import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  followerId: z.literal(true).optional(),
  personFollowedId: z.literal(true).optional()
}).strict();
export const FollowMaxAggregateInputObjectSchema: z.ZodType<Prisma.FollowMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.FollowMaxAggregateInputType>;
export const FollowMaxAggregateInputObjectZodSchema = makeSchema();
