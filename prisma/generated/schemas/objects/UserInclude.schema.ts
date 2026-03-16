import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PostFindManySchema as PostFindManySchema } from '../findManyPost.schema';
import { FollowFindManySchema as FollowFindManySchema } from '../findManyFollow.schema';
import { CommentFindManySchema as CommentFindManySchema } from '../findManyComment.schema';
import { LikeFindManySchema as LikeFindManySchema } from '../findManyLike.schema';
import { UserCountOutputTypeArgsObjectSchema as UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  postsById: z.union([z.boolean(), z.lazy(() => PostFindManySchema)]).optional(),
  postsByUsername: z.union([z.boolean(), z.lazy(() => PostFindManySchema)]).optional(),
  followers: z.union([z.boolean(), z.lazy(() => FollowFindManySchema)]).optional(),
  following: z.union([z.boolean(), z.lazy(() => FollowFindManySchema)]).optional(),
  comments: z.union([z.boolean(), z.lazy(() => CommentFindManySchema)]).optional(),
  likes: z.union([z.boolean(), z.lazy(() => LikeFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const UserIncludeObjectSchema: z.ZodType<Prisma.UserInclude> = makeSchema() as unknown as z.ZodType<Prisma.UserInclude>;
export const UserIncludeObjectZodSchema = makeSchema();
