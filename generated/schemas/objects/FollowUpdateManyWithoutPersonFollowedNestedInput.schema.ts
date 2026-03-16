import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FollowCreateWithoutPersonFollowedInputObjectSchema as FollowCreateWithoutPersonFollowedInputObjectSchema } from './FollowCreateWithoutPersonFollowedInput.schema';
import { FollowUncheckedCreateWithoutPersonFollowedInputObjectSchema as FollowUncheckedCreateWithoutPersonFollowedInputObjectSchema } from './FollowUncheckedCreateWithoutPersonFollowedInput.schema';
import { FollowCreateOrConnectWithoutPersonFollowedInputObjectSchema as FollowCreateOrConnectWithoutPersonFollowedInputObjectSchema } from './FollowCreateOrConnectWithoutPersonFollowedInput.schema';
import { FollowUpsertWithWhereUniqueWithoutPersonFollowedInputObjectSchema as FollowUpsertWithWhereUniqueWithoutPersonFollowedInputObjectSchema } from './FollowUpsertWithWhereUniqueWithoutPersonFollowedInput.schema';
import { FollowCreateManyPersonFollowedInputEnvelopeObjectSchema as FollowCreateManyPersonFollowedInputEnvelopeObjectSchema } from './FollowCreateManyPersonFollowedInputEnvelope.schema';
import { FollowWhereUniqueInputObjectSchema as FollowWhereUniqueInputObjectSchema } from './FollowWhereUniqueInput.schema';
import { FollowUpdateWithWhereUniqueWithoutPersonFollowedInputObjectSchema as FollowUpdateWithWhereUniqueWithoutPersonFollowedInputObjectSchema } from './FollowUpdateWithWhereUniqueWithoutPersonFollowedInput.schema';
import { FollowUpdateManyWithWhereWithoutPersonFollowedInputObjectSchema as FollowUpdateManyWithWhereWithoutPersonFollowedInputObjectSchema } from './FollowUpdateManyWithWhereWithoutPersonFollowedInput.schema';
import { FollowScalarWhereInputObjectSchema as FollowScalarWhereInputObjectSchema } from './FollowScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => FollowCreateWithoutPersonFollowedInputObjectSchema), z.lazy(() => FollowCreateWithoutPersonFollowedInputObjectSchema).array(), z.lazy(() => FollowUncheckedCreateWithoutPersonFollowedInputObjectSchema), z.lazy(() => FollowUncheckedCreateWithoutPersonFollowedInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => FollowCreateOrConnectWithoutPersonFollowedInputObjectSchema), z.lazy(() => FollowCreateOrConnectWithoutPersonFollowedInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => FollowUpsertWithWhereUniqueWithoutPersonFollowedInputObjectSchema), z.lazy(() => FollowUpsertWithWhereUniqueWithoutPersonFollowedInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => FollowCreateManyPersonFollowedInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => FollowWhereUniqueInputObjectSchema), z.lazy(() => FollowWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => FollowWhereUniqueInputObjectSchema), z.lazy(() => FollowWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => FollowWhereUniqueInputObjectSchema), z.lazy(() => FollowWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => FollowWhereUniqueInputObjectSchema), z.lazy(() => FollowWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => FollowUpdateWithWhereUniqueWithoutPersonFollowedInputObjectSchema), z.lazy(() => FollowUpdateWithWhereUniqueWithoutPersonFollowedInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => FollowUpdateManyWithWhereWithoutPersonFollowedInputObjectSchema), z.lazy(() => FollowUpdateManyWithWhereWithoutPersonFollowedInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => FollowScalarWhereInputObjectSchema), z.lazy(() => FollowScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const FollowUpdateManyWithoutPersonFollowedNestedInputObjectSchema: z.ZodType<Prisma.FollowUpdateManyWithoutPersonFollowedNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.FollowUpdateManyWithoutPersonFollowedNestedInput>;
export const FollowUpdateManyWithoutPersonFollowedNestedInputObjectZodSchema = makeSchema();
