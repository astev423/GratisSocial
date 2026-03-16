import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  content: z.string(),
  commenterUsername: z.string(),
  postId: z.string()
}).strict();
export const CommentUncheckedCreateInputObjectSchema: z.ZodType<Prisma.CommentUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentUncheckedCreateInput>;
export const CommentUncheckedCreateInputObjectZodSchema = makeSchema();
