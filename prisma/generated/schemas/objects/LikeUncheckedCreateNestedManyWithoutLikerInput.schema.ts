import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LikeCreateWithoutLikerInputObjectSchema as LikeCreateWithoutLikerInputObjectSchema } from './LikeCreateWithoutLikerInput.schema';
import { LikeUncheckedCreateWithoutLikerInputObjectSchema as LikeUncheckedCreateWithoutLikerInputObjectSchema } from './LikeUncheckedCreateWithoutLikerInput.schema';
import { LikeCreateOrConnectWithoutLikerInputObjectSchema as LikeCreateOrConnectWithoutLikerInputObjectSchema } from './LikeCreateOrConnectWithoutLikerInput.schema';
import { LikeCreateManyLikerInputEnvelopeObjectSchema as LikeCreateManyLikerInputEnvelopeObjectSchema } from './LikeCreateManyLikerInputEnvelope.schema';
import { LikeWhereUniqueInputObjectSchema as LikeWhereUniqueInputObjectSchema } from './LikeWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => LikeCreateWithoutLikerInputObjectSchema), z.lazy(() => LikeCreateWithoutLikerInputObjectSchema).array(), z.lazy(() => LikeUncheckedCreateWithoutLikerInputObjectSchema), z.lazy(() => LikeUncheckedCreateWithoutLikerInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => LikeCreateOrConnectWithoutLikerInputObjectSchema), z.lazy(() => LikeCreateOrConnectWithoutLikerInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => LikeCreateManyLikerInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => LikeWhereUniqueInputObjectSchema), z.lazy(() => LikeWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const LikeUncheckedCreateNestedManyWithoutLikerInputObjectSchema: z.ZodType<Prisma.LikeUncheckedCreateNestedManyWithoutLikerInput> = makeSchema() as unknown as z.ZodType<Prisma.LikeUncheckedCreateNestedManyWithoutLikerInput>;
export const LikeUncheckedCreateNestedManyWithoutLikerInputObjectZodSchema = makeSchema();
