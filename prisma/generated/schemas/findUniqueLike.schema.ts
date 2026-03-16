import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LikeSelectObjectSchema as LikeSelectObjectSchema } from './objects/LikeSelect.schema';
import { LikeIncludeObjectSchema as LikeIncludeObjectSchema } from './objects/LikeInclude.schema';
import { LikeWhereUniqueInputObjectSchema as LikeWhereUniqueInputObjectSchema } from './objects/LikeWhereUniqueInput.schema';

export const LikeFindUniqueSchema: z.ZodType<Prisma.LikeFindUniqueArgs> = z.object({ select: LikeSelectObjectSchema.optional(), include: LikeIncludeObjectSchema.optional(), where: LikeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.LikeFindUniqueArgs>;

export const LikeFindUniqueZodSchema = z.object({ select: LikeSelectObjectSchema.optional(), include: LikeIncludeObjectSchema.optional(), where: LikeWhereUniqueInputObjectSchema }).strict();