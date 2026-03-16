import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema'

const commentscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => CommentScalarWhereInputObjectSchema), z.lazy(() => CommentScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CommentScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CommentScalarWhereInputObjectSchema), z.lazy(() => CommentScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  content: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  commenterUsername: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  postId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const CommentScalarWhereInputObjectSchema: z.ZodType<Prisma.CommentScalarWhereInput> = commentscalarwhereinputSchema as unknown as z.ZodType<Prisma.CommentScalarWhereInput>;
export const CommentScalarWhereInputObjectZodSchema = commentscalarwhereinputSchema;
