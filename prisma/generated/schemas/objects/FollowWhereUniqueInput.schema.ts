import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FollowFollowerIdPersonFollowedIdCompoundUniqueInputObjectSchema as FollowFollowerIdPersonFollowedIdCompoundUniqueInputObjectSchema } from './FollowFollowerIdPersonFollowedIdCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  followerId_personFollowedId: z.lazy(() => FollowFollowerIdPersonFollowedIdCompoundUniqueInputObjectSchema).optional()
}).strict();
export const FollowWhereUniqueInputObjectSchema: z.ZodType<Prisma.FollowWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.FollowWhereUniqueInput>;
export const FollowWhereUniqueInputObjectZodSchema = makeSchema();
