import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FollowCreateWithoutFollowerInputObjectSchema as FollowCreateWithoutFollowerInputObjectSchema } from './FollowCreateWithoutFollowerInput.schema';
import { FollowUncheckedCreateWithoutFollowerInputObjectSchema as FollowUncheckedCreateWithoutFollowerInputObjectSchema } from './FollowUncheckedCreateWithoutFollowerInput.schema';
import { FollowCreateOrConnectWithoutFollowerInputObjectSchema as FollowCreateOrConnectWithoutFollowerInputObjectSchema } from './FollowCreateOrConnectWithoutFollowerInput.schema';
import { FollowUpsertWithWhereUniqueWithoutFollowerInputObjectSchema as FollowUpsertWithWhereUniqueWithoutFollowerInputObjectSchema } from './FollowUpsertWithWhereUniqueWithoutFollowerInput.schema';
import { FollowCreateManyFollowerInputEnvelopeObjectSchema as FollowCreateManyFollowerInputEnvelopeObjectSchema } from './FollowCreateManyFollowerInputEnvelope.schema';
import { FollowWhereUniqueInputObjectSchema as FollowWhereUniqueInputObjectSchema } from './FollowWhereUniqueInput.schema';
import { FollowUpdateWithWhereUniqueWithoutFollowerInputObjectSchema as FollowUpdateWithWhereUniqueWithoutFollowerInputObjectSchema } from './FollowUpdateWithWhereUniqueWithoutFollowerInput.schema';
import { FollowUpdateManyWithWhereWithoutFollowerInputObjectSchema as FollowUpdateManyWithWhereWithoutFollowerInputObjectSchema } from './FollowUpdateManyWithWhereWithoutFollowerInput.schema';
import { FollowScalarWhereInputObjectSchema as FollowScalarWhereInputObjectSchema } from './FollowScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => FollowCreateWithoutFollowerInputObjectSchema), z.lazy(() => FollowCreateWithoutFollowerInputObjectSchema).array(), z.lazy(() => FollowUncheckedCreateWithoutFollowerInputObjectSchema), z.lazy(() => FollowUncheckedCreateWithoutFollowerInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => FollowCreateOrConnectWithoutFollowerInputObjectSchema), z.lazy(() => FollowCreateOrConnectWithoutFollowerInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => FollowUpsertWithWhereUniqueWithoutFollowerInputObjectSchema), z.lazy(() => FollowUpsertWithWhereUniqueWithoutFollowerInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => FollowCreateManyFollowerInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => FollowWhereUniqueInputObjectSchema), z.lazy(() => FollowWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => FollowWhereUniqueInputObjectSchema), z.lazy(() => FollowWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => FollowWhereUniqueInputObjectSchema), z.lazy(() => FollowWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => FollowWhereUniqueInputObjectSchema), z.lazy(() => FollowWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => FollowUpdateWithWhereUniqueWithoutFollowerInputObjectSchema), z.lazy(() => FollowUpdateWithWhereUniqueWithoutFollowerInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => FollowUpdateManyWithWhereWithoutFollowerInputObjectSchema), z.lazy(() => FollowUpdateManyWithWhereWithoutFollowerInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => FollowScalarWhereInputObjectSchema), z.lazy(() => FollowScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const FollowUncheckedUpdateManyWithoutFollowerNestedInputObjectSchema: z.ZodType<Prisma.FollowUncheckedUpdateManyWithoutFollowerNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.FollowUncheckedUpdateManyWithoutFollowerNestedInput>;
export const FollowUncheckedUpdateManyWithoutFollowerNestedInputObjectZodSchema = makeSchema();
