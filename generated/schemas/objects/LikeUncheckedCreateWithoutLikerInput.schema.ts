import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  liked: z.boolean(),
  postId: z.string()
}).strict();
export const LikeUncheckedCreateWithoutLikerInputObjectSchema: z.ZodType<Prisma.LikeUncheckedCreateWithoutLikerInput> = makeSchema() as unknown as z.ZodType<Prisma.LikeUncheckedCreateWithoutLikerInput>;
export const LikeUncheckedCreateWithoutLikerInputObjectZodSchema = makeSchema();
