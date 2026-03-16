import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LikeIncludeObjectSchema as LikeIncludeObjectSchema } from './objects/LikeInclude.schema';
import { LikeOrderByWithRelationInputObjectSchema as LikeOrderByWithRelationInputObjectSchema } from './objects/LikeOrderByWithRelationInput.schema';
import { LikeWhereInputObjectSchema as LikeWhereInputObjectSchema } from './objects/LikeWhereInput.schema';
import { LikeWhereUniqueInputObjectSchema as LikeWhereUniqueInputObjectSchema } from './objects/LikeWhereUniqueInput.schema';
import { LikeScalarFieldEnumSchema } from './enums/LikeScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LikeFindManySelectSchema: z.ZodType<Prisma.LikeSelect> = z.object({
    id: z.boolean().optional(),
    liked: z.boolean().optional(),
    likerId: z.boolean().optional(),
    liker: z.boolean().optional(),
    postId: z.boolean().optional(),
    post: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.LikeSelect>;

export const LikeFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    liked: z.boolean().optional(),
    likerId: z.boolean().optional(),
    liker: z.boolean().optional(),
    postId: z.boolean().optional(),
    post: z.boolean().optional()
  }).strict();

export const LikeFindManySchema: z.ZodType<Prisma.LikeFindManyArgs> = z.object({ select: LikeFindManySelectSchema.optional(), include: z.lazy(() => LikeIncludeObjectSchema.optional()), orderBy: z.union([LikeOrderByWithRelationInputObjectSchema, LikeOrderByWithRelationInputObjectSchema.array()]).optional(), where: LikeWhereInputObjectSchema.optional(), cursor: LikeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([LikeScalarFieldEnumSchema, LikeScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.LikeFindManyArgs>;

export const LikeFindManyZodSchema = z.object({ select: LikeFindManySelectSchema.optional(), include: z.lazy(() => LikeIncludeObjectSchema.optional()), orderBy: z.union([LikeOrderByWithRelationInputObjectSchema, LikeOrderByWithRelationInputObjectSchema.array()]).optional(), where: LikeWhereInputObjectSchema.optional(), cursor: LikeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([LikeScalarFieldEnumSchema, LikeScalarFieldEnumSchema.array()]).optional() }).strict();