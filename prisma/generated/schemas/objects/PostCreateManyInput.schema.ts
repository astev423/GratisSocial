import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  title: z.string(),
  content: z.string(),
  createdAt: z.coerce.date().optional(),
  authorId: z.string(),
  posterUsername: z.string(),
  commentCount: z.number().int().optional(),
  likeCount: z.number().int().optional()
}).strict();
export const PostCreateManyInputObjectSchema: z.ZodType<Prisma.PostCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.PostCreateManyInput>;
export const PostCreateManyInputObjectZodSchema = makeSchema();
