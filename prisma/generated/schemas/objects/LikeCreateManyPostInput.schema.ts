import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  liked: z.boolean(),
  likerId: z.string()
}).strict();
export const LikeCreateManyPostInputObjectSchema: z.ZodType<Prisma.LikeCreateManyPostInput> = makeSchema() as unknown as z.ZodType<Prisma.LikeCreateManyPostInput>;
export const LikeCreateManyPostInputObjectZodSchema = makeSchema();
