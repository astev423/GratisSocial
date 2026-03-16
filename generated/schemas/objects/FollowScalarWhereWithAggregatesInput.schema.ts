import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

const followscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => FollowScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => FollowScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => FollowScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => FollowScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => FollowScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  followerId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  personFollowedId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const FollowScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.FollowScalarWhereWithAggregatesInput> = followscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.FollowScalarWhereWithAggregatesInput>;
export const FollowScalarWhereWithAggregatesInputObjectZodSchema = followscalarwherewithaggregatesinputSchema;
