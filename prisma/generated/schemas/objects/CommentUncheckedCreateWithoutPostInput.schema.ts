import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  content: z.string(),
  commenterUsername: z.string()
}).strict();
export const CommentUncheckedCreateWithoutPostInputObjectSchema: z.ZodType<Prisma.CommentUncheckedCreateWithoutPostInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentUncheckedCreateWithoutPostInput>;
export const CommentUncheckedCreateWithoutPostInputObjectZodSchema = makeSchema();
