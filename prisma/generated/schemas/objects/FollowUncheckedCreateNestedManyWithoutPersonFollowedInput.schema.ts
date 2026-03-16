import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FollowCreateWithoutPersonFollowedInputObjectSchema as FollowCreateWithoutPersonFollowedInputObjectSchema } from './FollowCreateWithoutPersonFollowedInput.schema';
import { FollowUncheckedCreateWithoutPersonFollowedInputObjectSchema as FollowUncheckedCreateWithoutPersonFollowedInputObjectSchema } from './FollowUncheckedCreateWithoutPersonFollowedInput.schema';
import { FollowCreateOrConnectWithoutPersonFollowedInputObjectSchema as FollowCreateOrConnectWithoutPersonFollowedInputObjectSchema } from './FollowCreateOrConnectWithoutPersonFollowedInput.schema';
import { FollowCreateManyPersonFollowedInputEnvelopeObjectSchema as FollowCreateManyPersonFollowedInputEnvelopeObjectSchema } from './FollowCreateManyPersonFollowedInputEnvelope.schema';
import { FollowWhereUniqueInputObjectSchema as FollowWhereUniqueInputObjectSchema } from './FollowWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => FollowCreateWithoutPersonFollowedInputObjectSchema), z.lazy(() => FollowCreateWithoutPersonFollowedInputObjectSchema).array(), z.lazy(() => FollowUncheckedCreateWithoutPersonFollowedInputObjectSchema), z.lazy(() => FollowUncheckedCreateWithoutPersonFollowedInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => FollowCreateOrConnectWithoutPersonFollowedInputObjectSchema), z.lazy(() => FollowCreateOrConnectWithoutPersonFollowedInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => FollowCreateManyPersonFollowedInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => FollowWhereUniqueInputObjectSchema), z.lazy(() => FollowWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const FollowUncheckedCreateNestedManyWithoutPersonFollowedInputObjectSchema: z.ZodType<Prisma.FollowUncheckedCreateNestedManyWithoutPersonFollowedInput> = makeSchema() as unknown as z.ZodType<Prisma.FollowUncheckedCreateNestedManyWithoutPersonFollowedInput>;
export const FollowUncheckedCreateNestedManyWithoutPersonFollowedInputObjectZodSchema = makeSchema();
