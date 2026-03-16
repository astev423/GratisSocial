import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  liked: z.literal(true).optional(),
  likerId: z.literal(true).optional(),
  postId: z.literal(true).optional()
}).strict();
export const LikeMaxAggregateInputObjectSchema: z.ZodType<Prisma.LikeMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.LikeMaxAggregateInputType>;
export const LikeMaxAggregateInputObjectZodSchema = makeSchema();
