import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FollowCreateWithoutFollowerInputObjectSchema as FollowCreateWithoutFollowerInputObjectSchema } from './FollowCreateWithoutFollowerInput.schema';
import { FollowUncheckedCreateWithoutFollowerInputObjectSchema as FollowUncheckedCreateWithoutFollowerInputObjectSchema } from './FollowUncheckedCreateWithoutFollowerInput.schema';
import { FollowCreateOrConnectWithoutFollowerInputObjectSchema as FollowCreateOrConnectWithoutFollowerInputObjectSchema } from './FollowCreateOrConnectWithoutFollowerInput.schema';
import { FollowCreateManyFollowerInputEnvelopeObjectSchema as FollowCreateManyFollowerInputEnvelopeObjectSchema } from './FollowCreateManyFollowerInputEnvelope.schema';
import { FollowWhereUniqueInputObjectSchema as FollowWhereUniqueInputObjectSchema } from './FollowWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => FollowCreateWithoutFollowerInputObjectSchema), z.lazy(() => FollowCreateWithoutFollowerInputObjectSchema).array(), z.lazy(() => FollowUncheckedCreateWithoutFollowerInputObjectSchema), z.lazy(() => FollowUncheckedCreateWithoutFollowerInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => FollowCreateOrConnectWithoutFollowerInputObjectSchema), z.lazy(() => FollowCreateOrConnectWithoutFollowerInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => FollowCreateManyFollowerInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => FollowWhereUniqueInputObjectSchema), z.lazy(() => FollowWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const FollowCreateNestedManyWithoutFollowerInputObjectSchema: z.ZodType<Prisma.FollowCreateNestedManyWithoutFollowerInput> = makeSchema() as unknown as z.ZodType<Prisma.FollowCreateNestedManyWithoutFollowerInput>;
export const FollowCreateNestedManyWithoutFollowerInputObjectZodSchema = makeSchema();
