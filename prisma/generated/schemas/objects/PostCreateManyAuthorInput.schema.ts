import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  title: z.string(),
  content: z.string(),
  createdAt: z.coerce.date().optional(),
  posterUsername: z.string(),
  commentCount: z.number().int().optional(),
  likeCount: z.number().int().optional()
}).strict();
export const PostCreateManyAuthorInputObjectSchema: z.ZodType<Prisma.PostCreateManyAuthorInput> = makeSchema() as unknown as z.ZodType<Prisma.PostCreateManyAuthorInput>;
export const PostCreateManyAuthorInputObjectZodSchema = makeSchema();
