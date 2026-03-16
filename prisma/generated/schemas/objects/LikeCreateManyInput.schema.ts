import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  liked: z.boolean(),
  likerId: z.string(),
  postId: z.string()
}).strict();
export const LikeCreateManyInputObjectSchema: z.ZodType<Prisma.LikeCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.LikeCreateManyInput>;
export const LikeCreateManyInputObjectZodSchema = makeSchema();
