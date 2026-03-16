import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LikeCreateManyLikerInputObjectSchema as LikeCreateManyLikerInputObjectSchema } from './LikeCreateManyLikerInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => LikeCreateManyLikerInputObjectSchema), z.lazy(() => LikeCreateManyLikerInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const LikeCreateManyLikerInputEnvelopeObjectSchema: z.ZodType<Prisma.LikeCreateManyLikerInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.LikeCreateManyLikerInputEnvelope>;
export const LikeCreateManyLikerInputEnvelopeObjectZodSchema = makeSchema();
