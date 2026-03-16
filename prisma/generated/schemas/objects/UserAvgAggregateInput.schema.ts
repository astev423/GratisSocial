import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  followersCount: z.literal(true).optional(),
  followingCount: z.literal(true).optional()
}).strict();
export const UserAvgAggregateInputObjectSchema: z.ZodType<Prisma.UserAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.UserAvgAggregateInputType>;
export const UserAvgAggregateInputObjectZodSchema = makeSchema();
