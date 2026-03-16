import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CommentCreateManyCommenterInputObjectSchema as CommentCreateManyCommenterInputObjectSchema } from './CommentCreateManyCommenterInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => CommentCreateManyCommenterInputObjectSchema), z.lazy(() => CommentCreateManyCommenterInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const CommentCreateManyCommenterInputEnvelopeObjectSchema: z.ZodType<Prisma.CommentCreateManyCommenterInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.CommentCreateManyCommenterInputEnvelope>;
export const CommentCreateManyCommenterInputEnvelopeObjectZodSchema = makeSchema();
