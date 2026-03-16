import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { FollowSelectObjectSchema as FollowSelectObjectSchema } from './objects/FollowSelect.schema';
import { FollowIncludeObjectSchema as FollowIncludeObjectSchema } from './objects/FollowInclude.schema';
import { FollowWhereUniqueInputObjectSchema as FollowWhereUniqueInputObjectSchema } from './objects/FollowWhereUniqueInput.schema';

export const FollowFindUniqueOrThrowSchema: z.ZodType<Prisma.FollowFindUniqueOrThrowArgs> = z.object({ select: FollowSelectObjectSchema.optional(), include: FollowIncludeObjectSchema.optional(), where: FollowWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.FollowFindUniqueOrThrowArgs>;

export const FollowFindUniqueOrThrowZodSchema = z.object({ select: FollowSelectObjectSchema.optional(), include: FollowIncludeObjectSchema.optional(), where: FollowWhereUniqueInputObjectSchema }).strict();