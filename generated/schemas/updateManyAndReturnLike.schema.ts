import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LikeSelectObjectSchema as LikeSelectObjectSchema } from './objects/LikeSelect.schema';
import { LikeUpdateManyMutationInputObjectSchema as LikeUpdateManyMutationInputObjectSchema } from './objects/LikeUpdateManyMutationInput.schema';
import { LikeWhereInputObjectSchema as LikeWhereInputObjectSchema } from './objects/LikeWhereInput.schema';

export const LikeUpdateManyAndReturnSchema: z.ZodType<Prisma.LikeUpdateManyAndReturnArgs> = z.object({ select: LikeSelectObjectSchema.optional(), data: LikeUpdateManyMutationInputObjectSchema, where: LikeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.LikeUpdateManyAndReturnArgs>;

export const LikeUpdateManyAndReturnZodSchema = z.object({ select: LikeSelectObjectSchema.optional(), data: LikeUpdateManyMutationInputObjectSchema, where: LikeWhereInputObjectSchema.optional() }).strict();