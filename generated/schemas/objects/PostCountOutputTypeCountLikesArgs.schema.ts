import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LikeWhereInputObjectSchema as LikeWhereInputObjectSchema } from './LikeWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LikeWhereInputObjectSchema).optional()
}).strict();
export const PostCountOutputTypeCountLikesArgsObjectSchema = makeSchema();
export const PostCountOutputTypeCountLikesArgsObjectZodSchema = makeSchema();
