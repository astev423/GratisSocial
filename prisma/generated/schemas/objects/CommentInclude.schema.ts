import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { PostArgsObjectSchema as PostArgsObjectSchema } from './PostArgs.schema'

const makeSchema = () => z.object({
  commenter: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  post: z.union([z.boolean(), z.lazy(() => PostArgsObjectSchema)]).optional()
}).strict();
export const CommentIncludeObjectSchema: z.ZodType<Prisma.CommentInclude> = makeSchema() as unknown as z.ZodType<Prisma.CommentInclude>;
export const CommentIncludeObjectZodSchema = makeSchema();
