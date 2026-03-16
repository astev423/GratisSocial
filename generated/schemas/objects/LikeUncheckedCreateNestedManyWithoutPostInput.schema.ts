import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LikeCreateWithoutPostInputObjectSchema as LikeCreateWithoutPostInputObjectSchema } from './LikeCreateWithoutPostInput.schema';
import { LikeUncheckedCreateWithoutPostInputObjectSchema as LikeUncheckedCreateWithoutPostInputObjectSchema } from './LikeUncheckedCreateWithoutPostInput.schema';
import { LikeCreateOrConnectWithoutPostInputObjectSchema as LikeCreateOrConnectWithoutPostInputObjectSchema } from './LikeCreateOrConnectWithoutPostInput.schema';
import { LikeCreateManyPostInputEnvelopeObjectSchema as LikeCreateManyPostInputEnvelopeObjectSchema } from './LikeCreateManyPostInputEnvelope.schema';
import { LikeWhereUniqueInputObjectSchema as LikeWhereUniqueInputObjectSchema } from './LikeWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => LikeCreateWithoutPostInputObjectSchema), z.lazy(() => LikeCreateWithoutPostInputObjectSchema).array(), z.lazy(() => LikeUncheckedCreateWithoutPostInputObjectSchema), z.lazy(() => LikeUncheckedCreateWithoutPostInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => LikeCreateOrConnectWithoutPostInputObjectSchema), z.lazy(() => LikeCreateOrConnectWithoutPostInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => LikeCreateManyPostInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => LikeWhereUniqueInputObjectSchema), z.lazy(() => LikeWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const LikeUncheckedCreateNestedManyWithoutPostInputObjectSchema: z.ZodType<Prisma.LikeUncheckedCreateNestedManyWithoutPostInput> = makeSchema() as unknown as z.ZodType<Prisma.LikeUncheckedCreateNestedManyWithoutPostInput>;
export const LikeUncheckedCreateNestedManyWithoutPostInputObjectZodSchema = makeSchema();
