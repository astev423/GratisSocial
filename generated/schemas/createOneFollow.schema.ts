import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { FollowSelectObjectSchema as FollowSelectObjectSchema } from './objects/FollowSelect.schema';
import { FollowIncludeObjectSchema as FollowIncludeObjectSchema } from './objects/FollowInclude.schema';
import { FollowCreateInputObjectSchema as FollowCreateInputObjectSchema } from './objects/FollowCreateInput.schema';
import { FollowUncheckedCreateInputObjectSchema as FollowUncheckedCreateInputObjectSchema } from './objects/FollowUncheckedCreateInput.schema';

export const FollowCreateOneSchema: z.ZodType<Prisma.FollowCreateArgs> = z.object({ select: FollowSelectObjectSchema.optional(), include: FollowIncludeObjectSchema.optional(), data: z.union([FollowCreateInputObjectSchema, FollowUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.FollowCreateArgs>;

export const FollowCreateOneZodSchema = z.object({ select: FollowSelectObjectSchema.optional(), include: FollowIncludeObjectSchema.optional(), data: z.union([FollowCreateInputObjectSchema, FollowUncheckedCreateInputObjectSchema]) }).strict();