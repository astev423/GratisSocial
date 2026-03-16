import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { FollowUpdateManyMutationInputObjectSchema as FollowUpdateManyMutationInputObjectSchema } from './objects/FollowUpdateManyMutationInput.schema';
import { FollowWhereInputObjectSchema as FollowWhereInputObjectSchema } from './objects/FollowWhereInput.schema';

export const FollowUpdateManySchema: z.ZodType<Prisma.FollowUpdateManyArgs> = z.object({ data: FollowUpdateManyMutationInputObjectSchema, where: FollowWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.FollowUpdateManyArgs>;

export const FollowUpdateManyZodSchema = z.object({ data: FollowUpdateManyMutationInputObjectSchema, where: FollowWhereInputObjectSchema.optional() }).strict();