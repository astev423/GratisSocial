import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { FollowWhereInputObjectSchema as FollowWhereInputObjectSchema } from './objects/FollowWhereInput.schema';

export const FollowDeleteManySchema: z.ZodType<Prisma.FollowDeleteManyArgs> = z.object({ where: FollowWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.FollowDeleteManyArgs>;

export const FollowDeleteManyZodSchema = z.object({ where: FollowWhereInputObjectSchema.optional() }).strict();