import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { FollowSelectObjectSchema as FollowSelectObjectSchema } from './objects/FollowSelect.schema';
import { FollowUpdateManyMutationInputObjectSchema as FollowUpdateManyMutationInputObjectSchema } from './objects/FollowUpdateManyMutationInput.schema';
import { FollowWhereInputObjectSchema as FollowWhereInputObjectSchema } from './objects/FollowWhereInput.schema';

export const FollowUpdateManyAndReturnSchema: z.ZodType<Prisma.FollowUpdateManyAndReturnArgs> = z.object({ select: FollowSelectObjectSchema.optional(), data: FollowUpdateManyMutationInputObjectSchema, where: FollowWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.FollowUpdateManyAndReturnArgs>;

export const FollowUpdateManyAndReturnZodSchema = z.object({ select: FollowSelectObjectSchema.optional(), data: FollowUpdateManyMutationInputObjectSchema, where: FollowWhereInputObjectSchema.optional() }).strict();