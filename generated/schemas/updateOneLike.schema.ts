import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LikeSelectObjectSchema as LikeSelectObjectSchema } from './objects/LikeSelect.schema';
import { LikeIncludeObjectSchema as LikeIncludeObjectSchema } from './objects/LikeInclude.schema';
import { LikeUpdateInputObjectSchema as LikeUpdateInputObjectSchema } from './objects/LikeUpdateInput.schema';
import { LikeUncheckedUpdateInputObjectSchema as LikeUncheckedUpdateInputObjectSchema } from './objects/LikeUncheckedUpdateInput.schema';
import { LikeWhereUniqueInputObjectSchema as LikeWhereUniqueInputObjectSchema } from './objects/LikeWhereUniqueInput.schema';

export const LikeUpdateOneSchema: z.ZodType<Prisma.LikeUpdateArgs> = z.object({ select: LikeSelectObjectSchema.optional(), include: LikeIncludeObjectSchema.optional(), data: z.union([LikeUpdateInputObjectSchema, LikeUncheckedUpdateInputObjectSchema]), where: LikeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.LikeUpdateArgs>;

export const LikeUpdateOneZodSchema = z.object({ select: LikeSelectObjectSchema.optional(), include: LikeIncludeObjectSchema.optional(), data: z.union([LikeUpdateInputObjectSchema, LikeUncheckedUpdateInputObjectSchema]), where: LikeWhereUniqueInputObjectSchema }).strict();