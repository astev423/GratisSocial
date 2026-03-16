import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LikeIncludeObjectSchema as LikeIncludeObjectSchema } from './objects/LikeInclude.schema';
import { LikeOrderByWithRelationInputObjectSchema as LikeOrderByWithRelationInputObjectSchema } from './objects/LikeOrderByWithRelationInput.schema';
import { LikeWhereInputObjectSchema as LikeWhereInputObjectSchema } from './objects/LikeWhereInput.schema';
import { LikeWhereUniqueInputObjectSchema as LikeWhereUniqueInputObjectSchema } from './objects/LikeWhereUniqueInput.schema';
import { LikeScalarFieldEnumSchema } from './enums/LikeScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LikeFindFirstSelectSchema: z.ZodType<Prisma.LikeSelect> = z.object({
    id: z.boolean().optional(),
    liked: z.boolean().optional(),
    likerId: z.boolean().optional(),
    liker: z.boolean().optional(),
    postId: z.boolean().optional(),
    post: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.LikeSelect>;

export const LikeFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    liked: z.boolean().optional(),
    likerId: z.boolean().optional(),
    liker: z.boolean().optional(),
    postId: z.boolean().optional(),
    post: z.boolean().optional()
  }).strict();

export const LikeFindFirstSchema: z.ZodType<Prisma.LikeFindFirstArgs> = z.object({ select: LikeFindFirstSelectSchema.optional(), include: z.lazy(() => LikeIncludeObjectSchema.optional()), orderBy: z.union([LikeOrderByWithRelationInputObjectSchema, LikeOrderByWithRelationInputObjectSchema.array()]).optional(), where: LikeWhereInputObjectSchema.optional(), cursor: LikeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([LikeScalarFieldEnumSchema, LikeScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.LikeFindFirstArgs>;

export const LikeFindFirstZodSchema = z.object({ select: LikeFindFirstSelectSchema.optional(), include: z.lazy(() => LikeIncludeObjectSchema.optional()), orderBy: z.union([LikeOrderByWithRelationInputObjectSchema, LikeOrderByWithRelationInputObjectSchema.array()]).optional(), where: LikeWhereInputObjectSchema.optional(), cursor: LikeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([LikeScalarFieldEnumSchema, LikeScalarFieldEnumSchema.array()]).optional() }).strict();