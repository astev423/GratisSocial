import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FollowCreateManyFollowerInputObjectSchema as FollowCreateManyFollowerInputObjectSchema } from './FollowCreateManyFollowerInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => FollowCreateManyFollowerInputObjectSchema), z.lazy(() => FollowCreateManyFollowerInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const FollowCreateManyFollowerInputEnvelopeObjectSchema: z.ZodType<Prisma.FollowCreateManyFollowerInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.FollowCreateManyFollowerInputEnvelope>;
export const FollowCreateManyFollowerInputEnvelopeObjectZodSchema = makeSchema();
