import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

const commentscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => CommentScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CommentScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CommentScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CommentScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CommentScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  content: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  commenterUsername: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  postId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const CommentScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.CommentScalarWhereWithAggregatesInput> = commentscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.CommentScalarWhereWithAggregatesInput>;
export const CommentScalarWhereWithAggregatesInputObjectZodSchema = commentscalarwherewithaggregatesinputSchema;
