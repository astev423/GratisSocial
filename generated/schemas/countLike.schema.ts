import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LikeOrderByWithRelationInputObjectSchema as LikeOrderByWithRelationInputObjectSchema } from './objects/LikeOrderByWithRelationInput.schema';
import { LikeWhereInputObjectSchema as LikeWhereInputObjectSchema } from './objects/LikeWhereInput.schema';
import { LikeWhereUniqueInputObjectSchema as LikeWhereUniqueInputObjectSchema } from './objects/LikeWhereUniqueInput.schema';
import { LikeCountAggregateInputObjectSchema as LikeCountAggregateInputObjectSchema } from './objects/LikeCountAggregateInput.schema';

export const LikeCountSchema: z.ZodType<Prisma.LikeCountArgs> = z.object({ orderBy: z.union([LikeOrderByWithRelationInputObjectSchema, LikeOrderByWithRelationInputObjectSchema.array()]).optional(), where: LikeWhereInputObjectSchema.optional(), cursor: LikeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), LikeCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.LikeCountArgs>;

export const LikeCountZodSchema = z.object({ orderBy: z.union([LikeOrderByWithRelationInputObjectSchema, LikeOrderByWithRelationInputObjectSchema.array()]).optional(), where: LikeWhereInputObjectSchema.optional(), cursor: LikeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), LikeCountAggregateInputObjectSchema ]).optional() }).strict();