import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema'

const followscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => FollowScalarWhereInputObjectSchema), z.lazy(() => FollowScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => FollowScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => FollowScalarWhereInputObjectSchema), z.lazy(() => FollowScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  followerId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  personFollowedId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const FollowScalarWhereInputObjectSchema: z.ZodType<Prisma.FollowScalarWhereInput> = followscalarwhereinputSchema as unknown as z.ZodType<Prisma.FollowScalarWhereInput>;
export const FollowScalarWhereInputObjectZodSchema = followscalarwhereinputSchema;
