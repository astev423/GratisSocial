import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema'

const likescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => LikeScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => LikeScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => LikeScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => LikeScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => LikeScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  liked: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  likerId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  postId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const LikeScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.LikeScalarWhereWithAggregatesInput> = likescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.LikeScalarWhereWithAggregatesInput>;
export const LikeScalarWhereWithAggregatesInputObjectZodSchema = likescalarwherewithaggregatesinputSchema;
