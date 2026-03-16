import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LikeSelectObjectSchema as LikeSelectObjectSchema } from './LikeSelect.schema';
import { LikeIncludeObjectSchema as LikeIncludeObjectSchema } from './LikeInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => LikeSelectObjectSchema).optional(),
  include: z.lazy(() => LikeIncludeObjectSchema).optional()
}).strict();
export const LikeArgsObjectSchema = makeSchema();
export const LikeArgsObjectZodSchema = makeSchema();
