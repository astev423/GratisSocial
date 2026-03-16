import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FollowCreateManyPersonFollowedInputObjectSchema as FollowCreateManyPersonFollowedInputObjectSchema } from './FollowCreateManyPersonFollowedInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => FollowCreateManyPersonFollowedInputObjectSchema), z.lazy(() => FollowCreateManyPersonFollowedInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const FollowCreateManyPersonFollowedInputEnvelopeObjectSchema: z.ZodType<Prisma.FollowCreateManyPersonFollowedInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.FollowCreateManyPersonFollowedInputEnvelope>;
export const FollowCreateManyPersonFollowedInputEnvelopeObjectZodSchema = makeSchema();
