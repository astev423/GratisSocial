import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { UserIncludeObjectSchema as UserIncludeObjectSchema } from './objects/UserInclude.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './objects/UserOrderByWithRelationInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './objects/UserWhereInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './objects/UserWhereUniqueInput.schema';
import { UserScalarFieldEnumSchema } from './enums/UserScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const UserFindFirstOrThrowSelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
    id: z.boolean().optional(),
    email: z.boolean().optional(),
    username: z.boolean().optional(),
    firstName: z.boolean().optional(),
    lastName: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    postsById: z.boolean().optional(),
    postsByUsername: z.boolean().optional(),
    followers: z.boolean().optional(),
    following: z.boolean().optional(),
    followersCount: z.boolean().optional(),
    followingCount: z.boolean().optional(),
    comments: z.boolean().optional(),
    likes: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.UserSelect>;

export const UserFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    email: z.boolean().optional(),
    username: z.boolean().optional(),
    firstName: z.boolean().optional(),
    lastName: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    postsById: z.boolean().optional(),
    postsByUsername: z.boolean().optional(),
    followers: z.boolean().optional(),
    following: z.boolean().optional(),
    followersCount: z.boolean().optional(),
    followingCount: z.boolean().optional(),
    comments: z.boolean().optional(),
    likes: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const UserFindFirstOrThrowSchema: z.ZodType<Prisma.UserFindFirstOrThrowArgs> = z.object({ select: UserFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => UserIncludeObjectSchema.optional()), orderBy: z.union([UserOrderByWithRelationInputObjectSchema, UserOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserWhereInputObjectSchema.optional(), cursor: UserWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([UserScalarFieldEnumSchema, UserScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.UserFindFirstOrThrowArgs>;

export const UserFindFirstOrThrowZodSchema = z.object({ select: UserFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => UserIncludeObjectSchema.optional()), orderBy: z.union([UserOrderByWithRelationInputObjectSchema, UserOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserWhereInputObjectSchema.optional(), cursor: UserWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([UserScalarFieldEnumSchema, UserScalarFieldEnumSchema.array()]).optional() }).strict();