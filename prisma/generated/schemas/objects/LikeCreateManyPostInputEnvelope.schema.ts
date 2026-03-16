import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LikeCreateManyPostInputObjectSchema as LikeCreateManyPostInputObjectSchema } from './LikeCreateManyPostInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => LikeCreateManyPostInputObjectSchema), z.lazy(() => LikeCreateManyPostInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const LikeCreateManyPostInputEnvelopeObjectSchema: z.ZodType<Prisma.LikeCreateManyPostInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.LikeCreateManyPostInputEnvelope>;
export const LikeCreateManyPostInputEnvelopeObjectZodSchema = makeSchema();
