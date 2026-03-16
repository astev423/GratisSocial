import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LikeOrderByWithRelationInputObjectSchema as LikeOrderByWithRelationInputObjectSchema } from './objects/LikeOrderByWithRelationInput.schema';
import { LikeWhereInputObjectSchema as LikeWhereInputObjectSchema } from './objects/LikeWhereInput.schema';
import { LikeWhereUniqueInputObjectSchema as LikeWhereUniqueInputObjectSchema } from './objects/LikeWhereUniqueInput.schema';
import { LikeCountAggregateInputObjectSchema as LikeCountAggregateInputObjectSchema } from './objects/LikeCountAggregateInput.schema';
import { LikeMinAggregateInputObjectSchema as LikeMinAggregateInputObjectSchema } from './objects/LikeMinAggregateInput.schema';
import { LikeMaxAggregateInputObjectSchema as LikeMaxAggregateInputObjectSchema } from './objects/LikeMaxAggregateInput.schema';

export const LikeAggregateSchema: z.ZodType<Prisma.LikeAggregateArgs> = z.object({ orderBy: z.union([LikeOrderByWithRelationInputObjectSchema, LikeOrderByWithRelationInputObjectSchema.array()]).optional(), where: LikeWhereInputObjectSchema.optional(), cursor: LikeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), LikeCountAggregateInputObjectSchema ]).optional(), _min: LikeMinAggregateInputObjectSchema.optional(), _max: LikeMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.LikeAggregateArgs>;

export const LikeAggregateZodSchema = z.object({ orderBy: z.union([LikeOrderByWithRelationInputObjectSchema, LikeOrderByWithRelationInputObjectSchema.array()]).optional(), where: LikeWhereInputObjectSchema.optional(), cursor: LikeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), LikeCountAggregateInputObjectSchema ]).optional(), _min: LikeMinAggregateInputObjectSchema.optional(), _max: LikeMaxAggregateInputObjectSchema.optional() }).strict();