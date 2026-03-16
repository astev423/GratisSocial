import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  liked: z.boolean(),
  postId: z.string()
}).strict();
export const LikeCreateManyLikerInputObjectSchema: z.ZodType<Prisma.LikeCreateManyLikerInput> = makeSchema() as unknown as z.ZodType<Prisma.LikeCreateManyLikerInput>;
export const LikeCreateManyLikerInputObjectZodSchema = makeSchema();
