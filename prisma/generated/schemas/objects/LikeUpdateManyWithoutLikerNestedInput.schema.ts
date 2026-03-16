import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LikeCreateWithoutLikerInputObjectSchema as LikeCreateWithoutLikerInputObjectSchema } from './LikeCreateWithoutLikerInput.schema';
import { LikeUncheckedCreateWithoutLikerInputObjectSchema as LikeUncheckedCreateWithoutLikerInputObjectSchema } from './LikeUncheckedCreateWithoutLikerInput.schema';
import { LikeCreateOrConnectWithoutLikerInputObjectSchema as LikeCreateOrConnectWithoutLikerInputObjectSchema } from './LikeCreateOrConnectWithoutLikerInput.schema';
import { LikeUpsertWithWhereUniqueWithoutLikerInputObjectSchema as LikeUpsertWithWhereUniqueWithoutLikerInputObjectSchema } from './LikeUpsertWithWhereUniqueWithoutLikerInput.schema';
import { LikeCreateManyLikerInputEnvelopeObjectSchema as LikeCreateManyLikerInputEnvelopeObjectSchema } from './LikeCreateManyLikerInputEnvelope.schema';
import { LikeWhereUniqueInputObjectSchema as LikeWhereUniqueInputObjectSchema } from './LikeWhereUniqueInput.schema';
import { LikeUpdateWithWhereUniqueWithoutLikerInputObjectSchema as LikeUpdateWithWhereUniqueWithoutLikerInputObjectSchema } from './LikeUpdateWithWhereUniqueWithoutLikerInput.schema';
import { LikeUpdateManyWithWhereWithoutLikerInputObjectSchema as LikeUpdateManyWithWhereWithoutLikerInputObjectSchema } from './LikeUpdateManyWithWhereWithoutLikerInput.schema';
import { LikeScalarWhereInputObjectSchema as LikeScalarWhereInputObjectSchema } from './LikeScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => LikeCreateWithoutLikerInputObjectSchema), z.lazy(() => LikeCreateWithoutLikerInputObjectSchema).array(), z.lazy(() => LikeUncheckedCreateWithoutLikerInputObjectSchema), z.lazy(() => LikeUncheckedCreateWithoutLikerInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => LikeCreateOrConnectWithoutLikerInputObjectSchema), z.lazy(() => LikeCreateOrConnectWithoutLikerInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => LikeUpsertWithWhereUniqueWithoutLikerInputObjectSchema), z.lazy(() => LikeUpsertWithWhereUniqueWithoutLikerInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => LikeCreateManyLikerInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => LikeWhereUniqueInputObjectSchema), z.lazy(() => LikeWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => LikeWhereUniqueInputObjectSchema), z.lazy(() => LikeWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => LikeWhereUniqueInputObjectSchema), z.lazy(() => LikeWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => LikeWhereUniqueInputObjectSchema), z.lazy(() => LikeWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => LikeUpdateWithWhereUniqueWithoutLikerInputObjectSchema), z.lazy(() => LikeUpdateWithWhereUniqueWithoutLikerInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => LikeUpdateManyWithWhereWithoutLikerInputObjectSchema), z.lazy(() => LikeUpdateManyWithWhereWithoutLikerInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => LikeScalarWhereInputObjectSchema), z.lazy(() => LikeScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const LikeUpdateManyWithoutLikerNestedInputObjectSchema: z.ZodType<Prisma.LikeUpdateManyWithoutLikerNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.LikeUpdateManyWithoutLikerNestedInput>;
export const LikeUpdateManyWithoutLikerNestedInputObjectZodSchema = makeSchema();
