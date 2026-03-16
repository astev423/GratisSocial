import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { FollowOrderByWithRelationInputObjectSchema as FollowOrderByWithRelationInputObjectSchema } from './objects/FollowOrderByWithRelationInput.schema';
import { FollowWhereInputObjectSchema as FollowWhereInputObjectSchema } from './objects/FollowWhereInput.schema';
import { FollowWhereUniqueInputObjectSchema as FollowWhereUniqueInputObjectSchema } from './objects/FollowWhereUniqueInput.schema';
import { FollowCountAggregateInputObjectSchema as FollowCountAggregateInputObjectSchema } from './objects/FollowCountAggregateInput.schema';

export const FollowCountSchema: z.ZodType<Prisma.FollowCountArgs> = z.object({ orderBy: z.union([FollowOrderByWithRelationInputObjectSchema, FollowOrderByWithRelationInputObjectSchema.array()]).optional(), where: FollowWhereInputObjectSchema.optional(), cursor: FollowWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), FollowCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.FollowCountArgs>;

export const FollowCountZodSchema = z.object({ orderBy: z.union([FollowOrderByWithRelationInputObjectSchema, FollowOrderByWithRelationInputObjectSchema.array()]).optional(), where: FollowWhereInputObjectSchema.optional(), cursor: FollowWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), FollowCountAggregateInputObjectSchema ]).optional() }).strict();