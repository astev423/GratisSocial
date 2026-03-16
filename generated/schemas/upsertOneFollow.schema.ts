import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { FollowSelectObjectSchema as FollowSelectObjectSchema } from './objects/FollowSelect.schema';
import { FollowIncludeObjectSchema as FollowIncludeObjectSchema } from './objects/FollowInclude.schema';
import { FollowWhereUniqueInputObjectSchema as FollowWhereUniqueInputObjectSchema } from './objects/FollowWhereUniqueInput.schema';
import { FollowCreateInputObjectSchema as FollowCreateInputObjectSchema } from './objects/FollowCreateInput.schema';
import { FollowUncheckedCreateInputObjectSchema as FollowUncheckedCreateInputObjectSchema } from './objects/FollowUncheckedCreateInput.schema';
import { FollowUpdateInputObjectSchema as FollowUpdateInputObjectSchema } from './objects/FollowUpdateInput.schema';
import { FollowUncheckedUpdateInputObjectSchema as FollowUncheckedUpdateInputObjectSchema } from './objects/FollowUncheckedUpdateInput.schema';

export const FollowUpsertOneSchema: z.ZodType<Prisma.FollowUpsertArgs> = z.object({ select: FollowSelectObjectSchema.optional(), include: FollowIncludeObjectSchema.optional(), where: FollowWhereUniqueInputObjectSchema, create: z.union([ FollowCreateInputObjectSchema, FollowUncheckedCreateInputObjectSchema ]), update: z.union([ FollowUpdateInputObjectSchema, FollowUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.FollowUpsertArgs>;

export const FollowUpsertOneZodSchema = z.object({ select: FollowSelectObjectSchema.optional(), include: FollowIncludeObjectSchema.optional(), where: FollowWhereUniqueInputObjectSchema, create: z.union([ FollowCreateInputObjectSchema, FollowUncheckedCreateInputObjectSchema ]), update: z.union([ FollowUpdateInputObjectSchema, FollowUncheckedUpdateInputObjectSchema ]) }).strict();