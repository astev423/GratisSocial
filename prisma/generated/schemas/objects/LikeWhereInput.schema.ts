import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { PostScalarRelationFilterObjectSchema as PostScalarRelationFilterObjectSchema } from './PostScalarRelationFilter.schema';
import { PostWhereInputObjectSchema as PostWhereInputObjectSchema } from './PostWhereInput.schema'

const likewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => LikeWhereInputObjectSchema), z.lazy(() => LikeWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => LikeWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => LikeWhereInputObjectSchema), z.lazy(() => LikeWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  liked: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  likerId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  postId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  liker: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  post: z.union([z.lazy(() => PostScalarRelationFilterObjectSchema), z.lazy(() => PostWhereInputObjectSchema)]).optional()
}).strict();
export const LikeWhereInputObjectSchema: z.ZodType<Prisma.LikeWhereInput> = likewhereinputSchema as unknown as z.ZodType<Prisma.LikeWhereInput>;
export const LikeWhereInputObjectZodSchema = likewhereinputSchema;
