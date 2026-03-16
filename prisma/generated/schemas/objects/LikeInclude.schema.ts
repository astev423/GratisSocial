import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { PostArgsObjectSchema as PostArgsObjectSchema } from './PostArgs.schema'

const makeSchema = () => z.object({
  liker: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  post: z.union([z.boolean(), z.lazy(() => PostArgsObjectSchema)]).optional()
}).strict();
export const LikeIncludeObjectSchema: z.ZodType<Prisma.LikeInclude> = makeSchema() as unknown as z.ZodType<Prisma.LikeInclude>;
export const LikeIncludeObjectZodSchema = makeSchema();
