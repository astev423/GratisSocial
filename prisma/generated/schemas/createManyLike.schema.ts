import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LikeCreateManyInputObjectSchema as LikeCreateManyInputObjectSchema } from './objects/LikeCreateManyInput.schema';

export const LikeCreateManySchema: z.ZodType<Prisma.LikeCreateManyArgs> = z.object({ data: z.union([ LikeCreateManyInputObjectSchema, z.array(LikeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.LikeCreateManyArgs>;

export const LikeCreateManyZodSchema = z.object({ data: z.union([ LikeCreateManyInputObjectSchema, z.array(LikeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();