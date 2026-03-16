import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  follower: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  followerId: z.boolean().optional(),
  personFollowed: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  personFollowedId: z.boolean().optional()
}).strict();
export const FollowSelectObjectSchema: z.ZodType<Prisma.FollowSelect> = makeSchema() as unknown as z.ZodType<Prisma.FollowSelect>;
export const FollowSelectObjectZodSchema = makeSchema();
