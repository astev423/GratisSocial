import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { PostListRelationFilterObjectSchema as PostListRelationFilterObjectSchema } from './PostListRelationFilter.schema';
import { FollowListRelationFilterObjectSchema as FollowListRelationFilterObjectSchema } from './FollowListRelationFilter.schema';
import { CommentListRelationFilterObjectSchema as CommentListRelationFilterObjectSchema } from './CommentListRelationFilter.schema';
import { LikeListRelationFilterObjectSchema as LikeListRelationFilterObjectSchema } from './LikeListRelationFilter.schema'

const userwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => UserWhereInputObjectSchema), z.lazy(() => UserWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => UserWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => UserWhereInputObjectSchema), z.lazy(() => UserWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  username: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  firstName: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  lastName: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  followersCount: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  followingCount: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  postsById: z.lazy(() => PostListRelationFilterObjectSchema).optional(),
  postsByUsername: z.lazy(() => PostListRelationFilterObjectSchema).optional(),
  followers: z.lazy(() => FollowListRelationFilterObjectSchema).optional(),
  following: z.lazy(() => FollowListRelationFilterObjectSchema).optional(),
  comments: z.lazy(() => CommentListRelationFilterObjectSchema).optional(),
  likes: z.lazy(() => LikeListRelationFilterObjectSchema).optional()
}).strict();
export const UserWhereInputObjectSchema: z.ZodType<Prisma.UserWhereInput> = userwhereinputSchema as unknown as z.ZodType<Prisma.UserWhereInput>;
export const UserWhereInputObjectZodSchema = userwhereinputSchema;
