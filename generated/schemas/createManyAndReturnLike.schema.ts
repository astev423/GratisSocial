import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LikeSelectObjectSchema as LikeSelectObjectSchema } from './objects/LikeSelect.schema';
import { LikeCreateManyInputObjectSchema as LikeCreateManyInputObjectSchema } from './objects/LikeCreateManyInput.schema';

export const LikeCreateManyAndReturnSchema: z.ZodType<Prisma.LikeCreateManyAndReturnArgs> = z.object({ select: LikeSelectObjectSchema.optional(), data: z.union([ LikeCreateManyInputObjectSchema, z.array(LikeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.LikeCreateManyAndReturnArgs>;

export const LikeCreateManyAndReturnZodSchema = z.object({ select: LikeSelectObjectSchema.optional(), data: z.union([ LikeCreateManyInputObjectSchema, z.array(LikeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();