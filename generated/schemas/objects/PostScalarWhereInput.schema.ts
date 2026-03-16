import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema'

const postscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => PostScalarWhereInputObjectSchema), z.lazy(() => PostScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PostScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PostScalarWhereInputObjectSchema), z.lazy(() => PostScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  title: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  content: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  authorId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  posterUsername: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  commentCount: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  likeCount: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const PostScalarWhereInputObjectSchema: z.ZodType<Prisma.PostScalarWhereInput> = postscalarwhereinputSchema as unknown as z.ZodType<Prisma.PostScalarWhereInput>;
export const PostScalarWhereInputObjectZodSchema = postscalarwhereinputSchema;
