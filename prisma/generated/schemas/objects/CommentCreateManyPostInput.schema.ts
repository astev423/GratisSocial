import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  content: z.string(),
  commenterUsername: z.string()
}).strict();
export const CommentCreateManyPostInputObjectSchema: z.ZodType<Prisma.CommentCreateManyPostInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentCreateManyPostInput>;
export const CommentCreateManyPostInputObjectZodSchema = makeSchema();
