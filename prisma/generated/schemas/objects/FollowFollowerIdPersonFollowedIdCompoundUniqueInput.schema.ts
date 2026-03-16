import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  followerId: z.string(),
  personFollowedId: z.string()
}).strict();
export const FollowFollowerIdPersonFollowedIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.FollowFollowerIdPersonFollowedIdCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.FollowFollowerIdPersonFollowedIdCompoundUniqueInput>;
export const FollowFollowerIdPersonFollowedIdCompoundUniqueInputObjectZodSchema = makeSchema();
