import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const followwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => FollowWhereInputObjectSchema), z.lazy(() => FollowWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => FollowWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => FollowWhereInputObjectSchema), z.lazy(() => FollowWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  followerId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  personFollowedId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  follower: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  personFollowed: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional()
}).strict();
export const FollowWhereInputObjectSchema: z.ZodType<Prisma.FollowWhereInput> = followwhereinputSchema as unknown as z.ZodType<Prisma.FollowWhereInput>;
export const FollowWhereInputObjectZodSchema = followwhereinputSchema;
