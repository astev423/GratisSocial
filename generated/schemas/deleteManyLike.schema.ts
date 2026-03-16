import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LikeWhereInputObjectSchema as LikeWhereInputObjectSchema } from './objects/LikeWhereInput.schema';

export const LikeDeleteManySchema: z.ZodType<Prisma.LikeDeleteManyArgs> = z.object({ where: LikeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.LikeDeleteManyArgs>;

export const LikeDeleteManyZodSchema = z.object({ where: LikeWhereInputObjectSchema.optional() }).strict();