import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LikeCreateWithoutPostInputObjectSchema as LikeCreateWithoutPostInputObjectSchema } from './LikeCreateWithoutPostInput.schema';
import { LikeUncheckedCreateWithoutPostInputObjectSchema as LikeUncheckedCreateWithoutPostInputObjectSchema } from './LikeUncheckedCreateWithoutPostInput.schema';
import { LikeCreateOrConnectWithoutPostInputObjectSchema as LikeCreateOrConnectWithoutPostInputObjectSchema } from './LikeCreateOrConnectWithoutPostInput.schema';
import { LikeUpsertWithWhereUniqueWithoutPostInputObjectSchema as LikeUpsertWithWhereUniqueWithoutPostInputObjectSchema } from './LikeUpsertWithWhereUniqueWithoutPostInput.schema';
import { LikeCreateManyPostInputEnvelopeObjectSchema as LikeCreateManyPostInputEnvelopeObjectSchema } from './LikeCreateManyPostInputEnvelope.schema';
import { LikeWhereUniqueInputObjectSchema as LikeWhereUniqueInputObjectSchema } from './LikeWhereUniqueInput.schema';
import { LikeUpdateWithWhereUniqueWithoutPostInputObjectSchema as LikeUpdateWithWhereUniqueWithoutPostInputObjectSchema } from './LikeUpdateWithWhereUniqueWithoutPostInput.schema';
import { LikeUpdateManyWithWhereWithoutPostInputObjectSchema as LikeUpdateManyWithWhereWithoutPostInputObjectSchema } from './LikeUpdateManyWithWhereWithoutPostInput.schema';
import { LikeScalarWhereInputObjectSchema as LikeScalarWhereInputObjectSchema } from './LikeScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => LikeCreateWithoutPostInputObjectSchema), z.lazy(() => LikeCreateWithoutPostInputObjectSchema).array(), z.lazy(() => LikeUncheckedCreateWithoutPostInputObjectSchema), z.lazy(() => LikeUncheckedCreateWithoutPostInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => LikeCreateOrConnectWithoutPostInputObjectSchema), z.lazy(() => LikeCreateOrConnectWithoutPostInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => LikeUpsertWithWhereUniqueWithoutPostInputObjectSchema), z.lazy(() => LikeUpsertWithWhereUniqueWithoutPostInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => LikeCreateManyPostInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => LikeWhereUniqueInputObjectSchema), z.lazy(() => LikeWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => LikeWhereUniqueInputObjectSchema), z.lazy(() => LikeWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => LikeWhereUniqueInputObjectSchema), z.lazy(() => LikeWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => LikeWhereUniqueInputObjectSchema), z.lazy(() => LikeWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => LikeUpdateWithWhereUniqueWithoutPostInputObjectSchema), z.lazy(() => LikeUpdateWithWhereUniqueWithoutPostInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => LikeUpdateManyWithWhereWithoutPostInputObjectSchema), z.lazy(() => LikeUpdateManyWithWhereWithoutPostInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => LikeScalarWhereInputObjectSchema), z.lazy(() => LikeScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const LikeUncheckedUpdateManyWithoutPostNestedInputObjectSchema: z.ZodType<Prisma.LikeUncheckedUpdateManyWithoutPostNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.LikeUncheckedUpdateManyWithoutPostNestedInput>;
export const LikeUncheckedUpdateManyWithoutPostNestedInputObjectZodSchema = makeSchema();
