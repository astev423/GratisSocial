import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LikeSelectObjectSchema as LikeSelectObjectSchema } from './objects/LikeSelect.schema';
import { LikeIncludeObjectSchema as LikeIncludeObjectSchema } from './objects/LikeInclude.schema';
import { LikeCreateInputObjectSchema as LikeCreateInputObjectSchema } from './objects/LikeCreateInput.schema';
import { LikeUncheckedCreateInputObjectSchema as LikeUncheckedCreateInputObjectSchema } from './objects/LikeUncheckedCreateInput.schema';

export const LikeCreateOneSchema: z.ZodType<Prisma.LikeCreateArgs> = z.object({ select: LikeSelectObjectSchema.optional(), include: LikeIncludeObjectSchema.optional(), data: z.union([LikeCreateInputObjectSchema, LikeUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.LikeCreateArgs>;

export const LikeCreateOneZodSchema = z.object({ select: LikeSelectObjectSchema.optional(), include: LikeIncludeObjectSchema.optional(), data: z.union([LikeCreateInputObjectSchema, LikeUncheckedCreateInputObjectSchema]) }).strict();