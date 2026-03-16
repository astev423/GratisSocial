import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LikeUpdateManyMutationInputObjectSchema as LikeUpdateManyMutationInputObjectSchema } from './objects/LikeUpdateManyMutationInput.schema';
import { LikeWhereInputObjectSchema as LikeWhereInputObjectSchema } from './objects/LikeWhereInput.schema';

export const LikeUpdateManySchema: z.ZodType<Prisma.LikeUpdateManyArgs> = z.object({ data: LikeUpdateManyMutationInputObjectSchema, where: LikeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.LikeUpdateManyArgs>;

export const LikeUpdateManyZodSchema = z.object({ data: LikeUpdateManyMutationInputObjectSchema, where: LikeWhereInputObjectSchema.optional() }).strict();