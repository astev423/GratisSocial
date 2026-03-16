import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LikeWhereInputObjectSchema as LikeWhereInputObjectSchema } from './LikeWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => LikeWhereInputObjectSchema).optional(),
  some: z.lazy(() => LikeWhereInputObjectSchema).optional(),
  none: z.lazy(() => LikeWhereInputObjectSchema).optional()
}).strict();
export const LikeListRelationFilterObjectSchema: z.ZodType<Prisma.LikeListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.LikeListRelationFilter>;
export const LikeListRelationFilterObjectZodSchema = makeSchema();
