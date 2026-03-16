import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FollowWhereInputObjectSchema as FollowWhereInputObjectSchema } from './FollowWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => FollowWhereInputObjectSchema).optional(),
  some: z.lazy(() => FollowWhereInputObjectSchema).optional(),
  none: z.lazy(() => FollowWhereInputObjectSchema).optional()
}).strict();
export const FollowListRelationFilterObjectSchema: z.ZodType<Prisma.FollowListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.FollowListRelationFilter>;
export const FollowListRelationFilterObjectZodSchema = makeSchema();
