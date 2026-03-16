import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { FollowSelectObjectSchema as FollowSelectObjectSchema } from './objects/FollowSelect.schema';
import { FollowIncludeObjectSchema as FollowIncludeObjectSchema } from './objects/FollowInclude.schema';
import { FollowUpdateInputObjectSchema as FollowUpdateInputObjectSchema } from './objects/FollowUpdateInput.schema';
import { FollowUncheckedUpdateInputObjectSchema as FollowUncheckedUpdateInputObjectSchema } from './objects/FollowUncheckedUpdateInput.schema';
import { FollowWhereUniqueInputObjectSchema as FollowWhereUniqueInputObjectSchema } from './objects/FollowWhereUniqueInput.schema';

export const FollowUpdateOneSchema: z.ZodType<Prisma.FollowUpdateArgs> = z.object({ select: FollowSelectObjectSchema.optional(), include: FollowIncludeObjectSchema.optional(), data: z.union([FollowUpdateInputObjectSchema, FollowUncheckedUpdateInputObjectSchema]), where: FollowWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.FollowUpdateArgs>;

export const FollowUpdateOneZodSchema = z.object({ select: FollowSelectObjectSchema.optional(), include: FollowIncludeObjectSchema.optional(), data: z.union([FollowUpdateInputObjectSchema, FollowUncheckedUpdateInputObjectSchema]), where: FollowWhereUniqueInputObjectSchema }).strict();