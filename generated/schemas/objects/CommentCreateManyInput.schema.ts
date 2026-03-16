import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  content: z.string(),
  commenterUsername: z.string(),
  postId: z.string()
}).strict();
export const CommentCreateManyInputObjectSchema: z.ZodType<Prisma.CommentCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentCreateManyInput>;
export const CommentCreateManyInputObjectZodSchema = makeSchema();
