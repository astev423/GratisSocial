import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { FollowOrderByWithRelationInputObjectSchema as FollowOrderByWithRelationInputObjectSchema } from './objects/FollowOrderByWithRelationInput.schema';
import { FollowWhereInputObjectSchema as FollowWhereInputObjectSchema } from './objects/FollowWhereInput.schema';
import { FollowWhereUniqueInputObjectSchema as FollowWhereUniqueInputObjectSchema } from './objects/FollowWhereUniqueInput.schema';
import { FollowCountAggregateInputObjectSchema as FollowCountAggregateInputObjectSchema } from './objects/FollowCountAggregateInput.schema';
import { FollowMinAggregateInputObjectSchema as FollowMinAggregateInputObjectSchema } from './objects/FollowMinAggregateInput.schema';
import { FollowMaxAggregateInputObjectSchema as FollowMaxAggregateInputObjectSchema } from './objects/FollowMaxAggregateInput.schema';

export const FollowAggregateSchema: z.ZodType<Prisma.FollowAggregateArgs> = z.object({ orderBy: z.union([FollowOrderByWithRelationInputObjectSchema, FollowOrderByWithRelationInputObjectSchema.array()]).optional(), where: FollowWhereInputObjectSchema.optional(), cursor: FollowWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), FollowCountAggregateInputObjectSchema ]).optional(), _min: FollowMinAggregateInputObjectSchema.optional(), _max: FollowMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.FollowAggregateArgs>;

export const FollowAggregateZodSchema = z.object({ orderBy: z.union([FollowOrderByWithRelationInputObjectSchema, FollowOrderByWithRelationInputObjectSchema.array()]).optional(), where: FollowWhereInputObjectSchema.optional(), cursor: FollowWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), FollowCountAggregateInputObjectSchema ]).optional(), _min: FollowMinAggregateInputObjectSchema.optional(), _max: FollowMaxAggregateInputObjectSchema.optional() }).strict();