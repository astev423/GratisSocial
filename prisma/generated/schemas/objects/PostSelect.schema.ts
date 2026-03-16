import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { CommentFindManySchema as CommentFindManySchema } from '../findManyComment.schema';
import { LikeFindManySchema as LikeFindManySchema } from '../findManyLike.schema';
import { PostCountOutputTypeArgsObjectSchema as PostCountOutputTypeArgsObjectSchema } from './PostCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  content: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  authorId: z.boolean().optional(),
  author: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  authorUsername: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  posterUsername: z.boolean().optional(),
  commentCount: z.boolean().optional(),
  comments: z.union([z.boolean(), z.lazy(() => CommentFindManySchema)]).optional(),
  likeCount: z.boolean().optional(),
  likes: z.union([z.boolean(), z.lazy(() => LikeFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => PostCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const PostSelectObjectSchema: z.ZodType<Prisma.PostSelect> = makeSchema() as unknown as z.ZodType<Prisma.PostSelect>;
export const PostSelectObjectZodSchema = makeSchema();
