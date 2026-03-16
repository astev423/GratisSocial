import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  followerId: z.literal(true).optional(),
  personFollowedId: z.literal(true).optional()
}).strict();
export const FollowMinAggregateInputObjectSchema: z.ZodType<Prisma.FollowMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.FollowMinAggregateInputType>;
export const FollowMinAggregateInputObjectZodSchema = makeSchema();
