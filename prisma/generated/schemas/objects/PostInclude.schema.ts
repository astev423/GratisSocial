import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { CommentFindManySchema as CommentFindManySchema } from '../findManyComment.schema';
import { LikeFindManySchema as LikeFindManySchema } from '../findManyLike.schema';
import { PostCountOutputTypeArgsObjectSchema as PostCountOutputTypeArgsObjectSchema } from './PostCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  author: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  authorUsername: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  comments: z.union([z.boolean(), z.lazy(() => CommentFindManySchema)]).optional(),
  likes: z.union([z.boolean(), z.lazy(() => LikeFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => PostCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const PostIncludeObjectSchema: z.ZodType<Prisma.PostInclude> = makeSchema() as unknown as z.ZodType<Prisma.PostInclude>;
export const PostIncludeObjectZodSchema = makeSchema();
