import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LikeWhereInputObjectSchema as LikeWhereInputObjectSchema } from './objects/LikeWhereInput.schema';
import { LikeOrderByWithAggregationInputObjectSchema as LikeOrderByWithAggregationInputObjectSchema } from './objects/LikeOrderByWithAggregationInput.schema';
import { LikeScalarWhereWithAggregatesInputObjectSchema as LikeScalarWhereWithAggregatesInputObjectSchema } from './objects/LikeScalarWhereWithAggregatesInput.schema';
import { LikeScalarFieldEnumSchema } from './enums/LikeScalarFieldEnum.schema';
import { LikeCountAggregateInputObjectSchema as LikeCountAggregateInputObjectSchema } from './objects/LikeCountAggregateInput.schema';
import { LikeMinAggregateInputObjectSchema as LikeMinAggregateInputObjectSchema } from './objects/LikeMinAggregateInput.schema';
import { LikeMaxAggregateInputObjectSchema as LikeMaxAggregateInputObjectSchema } from './objects/LikeMaxAggregateInput.schema';

export const LikeGroupBySchema: z.ZodType<Prisma.LikeGroupByArgs> = z.object({ where: LikeWhereInputObjectSchema.optional(), orderBy: z.union([LikeOrderByWithAggregationInputObjectSchema, LikeOrderByWithAggregationInputObjectSchema.array()]).optional(), having: LikeScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(LikeScalarFieldEnumSchema), _count: z.union([ z.literal(true), LikeCountAggregateInputObjectSchema ]).optional(), _min: LikeMinAggregateInputObjectSchema.optional(), _max: LikeMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.LikeGroupByArgs>;

export const LikeGroupByZodSchema = z.object({ where: LikeWhereInputObjectSchema.optional(), orderBy: z.union([LikeOrderByWithAggregationInputObjectSchema, LikeOrderByWithAggregationInputObjectSchema.array()]).optional(), having: LikeScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(LikeScalarFieldEnumSchema), _count: z.union([ z.literal(true), LikeCountAggregateInputObjectSchema ]).optional(), _min: LikeMinAggregateInputObjectSchema.optional(), _max: LikeMaxAggregateInputObjectSchema.optional() }).strict();