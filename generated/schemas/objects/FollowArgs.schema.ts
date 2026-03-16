import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FollowSelectObjectSchema as FollowSelectObjectSchema } from './FollowSelect.schema';
import { FollowIncludeObjectSchema as FollowIncludeObjectSchema } from './FollowInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => FollowSelectObjectSchema).optional(),
  include: z.lazy(() => FollowIncludeObjectSchema).optional()
}).strict();
export const FollowArgsObjectSchema = makeSchema();
export const FollowArgsObjectZodSchema = makeSchema();
