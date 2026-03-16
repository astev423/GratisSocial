import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LikeSelectObjectSchema as LikeSelectObjectSchema } from './objects/LikeSelect.schema';
import { LikeIncludeObjectSchema as LikeIncludeObjectSchema } from './objects/LikeInclude.schema';
import { LikeWhereUniqueInputObjectSchema as LikeWhereUniqueInputObjectSchema } from './objects/LikeWhereUniqueInput.schema';
import { LikeCreateInputObjectSchema as LikeCreateInputObjectSchema } from './objects/LikeCreateInput.schema';
import { LikeUncheckedCreateInputObjectSchema as LikeUncheckedCreateInputObjectSchema } from './objects/LikeUncheckedCreateInput.schema';
import { LikeUpdateInputObjectSchema as LikeUpdateInputObjectSchema } from './objects/LikeUpdateInput.schema';
import { LikeUncheckedUpdateInputObjectSchema as LikeUncheckedUpdateInputObjectSchema } from './objects/LikeUncheckedUpdateInput.schema';

export const LikeUpsertOneSchema: z.ZodType<Prisma.LikeUpsertArgs> = z.object({ select: LikeSelectObjectSchema.optional(), include: LikeIncludeObjectSchema.optional(), where: LikeWhereUniqueInputObjectSchema, create: z.union([ LikeCreateInputObjectSchema, LikeUncheckedCreateInputObjectSchema ]), update: z.union([ LikeUpdateInputObjectSchema, LikeUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.LikeUpsertArgs>;

export const LikeUpsertOneZodSchema = z.object({ select: LikeSelectObjectSchema.optional(), include: LikeIncludeObjectSchema.optional(), where: LikeWhereUniqueInputObjectSchema, create: z.union([ LikeCreateInputObjectSchema, LikeUncheckedCreateInputObjectSchema ]), update: z.union([ LikeUpdateInputObjectSchema, LikeUncheckedUpdateInputObjectSchema ]) }).strict();