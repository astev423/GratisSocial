import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { PostArgsObjectSchema as PostArgsObjectSchema } from './PostArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  liked: z.boolean().optional(),
  likerId: z.boolean().optional(),
  liker: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  postId: z.boolean().optional(),
  post: z.union([z.boolean(), z.lazy(() => PostArgsObjectSchema)]).optional()
}).strict();
export const LikeSelectObjectSchema: z.ZodType<Prisma.LikeSelect> = makeSchema() as unknown as z.ZodType<Prisma.LikeSelect>;
export const LikeSelectObjectZodSchema = makeSchema();
