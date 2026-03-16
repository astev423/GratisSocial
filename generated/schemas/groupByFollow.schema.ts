import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { FollowWhereInputObjectSchema as FollowWhereInputObjectSchema } from './objects/FollowWhereInput.schema';
import { FollowOrderByWithAggregationInputObjectSchema as FollowOrderByWithAggregationInputObjectSchema } from './objects/FollowOrderByWithAggregationInput.schema';
import { FollowScalarWhereWithAggregatesInputObjectSchema as FollowScalarWhereWithAggregatesInputObjectSchema } from './objects/FollowScalarWhereWithAggregatesInput.schema';
import { FollowScalarFieldEnumSchema } from './enums/FollowScalarFieldEnum.schema';
import { FollowCountAggregateInputObjectSchema as FollowCountAggregateInputObjectSchema } from './objects/FollowCountAggregateInput.schema';
import { FollowMinAggregateInputObjectSchema as FollowMinAggregateInputObjectSchema } from './objects/FollowMinAggregateInput.schema';
import { FollowMaxAggregateInputObjectSchema as FollowMaxAggregateInputObjectSchema } from './objects/FollowMaxAggregateInput.schema';

export const FollowGroupBySchema: z.ZodType<Prisma.FollowGroupByArgs> = z.object({ where: FollowWhereInputObjectSchema.optional(), orderBy: z.union([FollowOrderByWithAggregationInputObjectSchema, FollowOrderByWithAggregationInputObjectSchema.array()]).optional(), having: FollowScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(FollowScalarFieldEnumSchema), _count: z.union([ z.literal(true), FollowCountAggregateInputObjectSchema ]).optional(), _min: FollowMinAggregateInputObjectSchema.optional(), _max: FollowMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.FollowGroupByArgs>;

export const FollowGroupByZodSchema = z.object({ where: FollowWhereInputObjectSchema.optional(), orderBy: z.union([FollowOrderByWithAggregationInputObjectSchema, FollowOrderByWithAggregationInputObjectSchema.array()]).optional(), having: FollowScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(FollowScalarFieldEnumSchema), _count: z.union([ z.literal(true), FollowCountAggregateInputObjectSchema ]).optional(), _min: FollowMinAggregateInputObjectSchema.optional(), _max: FollowMaxAggregateInputObjectSchema.optional() }).strict();