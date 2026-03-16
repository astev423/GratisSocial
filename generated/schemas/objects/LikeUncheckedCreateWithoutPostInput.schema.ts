import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  liked: z.boolean(),
  likerId: z.string()
}).strict();
export const LikeUncheckedCreateWithoutPostInputObjectSchema: z.ZodType<Prisma.LikeUncheckedCreateWithoutPostInput> = makeSchema() as unknown as z.ZodType<Prisma.LikeUncheckedCreateWithoutPostInput>;
export const LikeUncheckedCreateWithoutPostInputObjectZodSchema = makeSchema();
