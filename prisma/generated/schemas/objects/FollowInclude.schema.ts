import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  follower: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  personFollowed: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
}).strict();
export const FollowIncludeObjectSchema: z.ZodType<Prisma.FollowInclude> = makeSchema() as unknown as z.ZodType<Prisma.FollowInclude>;
export const FollowIncludeObjectZodSchema = makeSchema();
