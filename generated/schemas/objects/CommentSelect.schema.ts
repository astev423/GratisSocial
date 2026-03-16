import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { PostArgsObjectSchema as PostArgsObjectSchema } from './PostArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  content: z.boolean().optional(),
  commenterUsername: z.boolean().optional(),
  commenter: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  postId: z.boolean().optional(),
  post: z.union([z.boolean(), z.lazy(() => PostArgsObjectSchema)]).optional()
}).strict();
export const CommentSelectObjectSchema: z.ZodType<Prisma.CommentSelect> = makeSchema() as unknown as z.ZodType<Prisma.CommentSelect>;
export const CommentSelectObjectZodSchema = makeSchema();
