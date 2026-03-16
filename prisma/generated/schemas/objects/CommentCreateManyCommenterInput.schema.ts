import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  content: z.string(),
  postId: z.string()
}).strict();
export const CommentCreateManyCommenterInputObjectSchema: z.ZodType<Prisma.CommentCreateManyCommenterInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentCreateManyCommenterInput>;
export const CommentCreateManyCommenterInputObjectZodSchema = makeSchema();
