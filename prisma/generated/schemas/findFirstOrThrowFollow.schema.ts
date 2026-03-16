import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { FollowIncludeObjectSchema as FollowIncludeObjectSchema } from './objects/FollowInclude.schema';
import { FollowOrderByWithRelationInputObjectSchema as FollowOrderByWithRelationInputObjectSchema } from './objects/FollowOrderByWithRelationInput.schema';
import { FollowWhereInputObjectSchema as FollowWhereInputObjectSchema } from './objects/FollowWhereInput.schema';
import { FollowWhereUniqueInputObjectSchema as FollowWhereUniqueInputObjectSchema } from './objects/FollowWhereUniqueInput.schema';
import { FollowScalarFieldEnumSchema } from './enums/FollowScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const FollowFindFirstOrThrowSelectSchema: z.ZodType<Prisma.FollowSelect> = z.object({
    id: z.boolean().optional(),
    follower: z.boolean().optional(),
    followerId: z.boolean().optional(),
    personFollowed: z.boolean().optional(),
    personFollowedId: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.FollowSelect>;

export const FollowFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    follower: z.boolean().optional(),
    followerId: z.boolean().optional(),
    personFollowed: z.boolean().optional(),
    personFollowedId: z.boolean().optional()
  }).strict();

export const FollowFindFirstOrThrowSchema: z.ZodType<Prisma.FollowFindFirstOrThrowArgs> = z.object({ select: FollowFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => FollowIncludeObjectSchema.optional()), orderBy: z.union([FollowOrderByWithRelationInputObjectSchema, FollowOrderByWithRelationInputObjectSchema.array()]).optional(), where: FollowWhereInputObjectSchema.optional(), cursor: FollowWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([FollowScalarFieldEnumSchema, FollowScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.FollowFindFirstOrThrowArgs>;

export const FollowFindFirstOrThrowZodSchema = z.object({ select: FollowFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => FollowIncludeObjectSchema.optional()), orderBy: z.union([FollowOrderByWithRelationInputObjectSchema, FollowOrderByWithRelationInputObjectSchema.array()]).optional(), where: FollowWhereInputObjectSchema.optional(), cursor: FollowWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([FollowScalarFieldEnumSchema, FollowScalarFieldEnumSchema.array()]).optional() }).strict();