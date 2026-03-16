import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  title: z.string(),
  content: z.string(),
  createdAt: z.coerce.date().optional(),
  authorId: z.string(),
  commentCount: z.number().int().optional(),
  likeCount: z.number().int().optional()
}).strict();
export const PostCreateManyAuthorUsernameInputObjectSchema: z.ZodType<Prisma.PostCreateManyAuthorUsernameInput> = makeSchema() as unknown as z.ZodType<Prisma.PostCreateManyAuthorUsernameInput>;
export const PostCreateManyAuthorUsernameInputObjectZodSchema = makeSchema();
