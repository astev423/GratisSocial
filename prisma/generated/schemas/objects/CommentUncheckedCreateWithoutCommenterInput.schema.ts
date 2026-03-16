import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  content: z.string(),
  postId: z.string()
}).strict();
export const CommentUncheckedCreateWithoutCommenterInputObjectSchema: z.ZodType<Prisma.CommentUncheckedCreateWithoutCommenterInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentUncheckedCreateWithoutCommenterInput>;
export const CommentUncheckedCreateWithoutCommenterInputObjectZodSchema = makeSchema();
