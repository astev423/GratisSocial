import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema'

const postscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => PostScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => PostScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PostScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PostScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => PostScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  title: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  content: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  authorId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  posterUsername: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  commentCount: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  likeCount: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const PostScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.PostScalarWhereWithAggregatesInput> = postscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.PostScalarWhereWithAggregatesInput>;
export const PostScalarWhereWithAggregatesInputObjectZodSchema = postscalarwherewithaggregatesinputSchema;
