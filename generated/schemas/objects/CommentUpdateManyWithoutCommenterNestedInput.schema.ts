import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CommentCreateWithoutCommenterInputObjectSchema as CommentCreateWithoutCommenterInputObjectSchema } from './CommentCreateWithoutCommenterInput.schema';
import { CommentUncheckedCreateWithoutCommenterInputObjectSchema as CommentUncheckedCreateWithoutCommenterInputObjectSchema } from './CommentUncheckedCreateWithoutCommenterInput.schema';
import { CommentCreateOrConnectWithoutCommenterInputObjectSchema as CommentCreateOrConnectWithoutCommenterInputObjectSchema } from './CommentCreateOrConnectWithoutCommenterInput.schema';
import { CommentUpsertWithWhereUniqueWithoutCommenterInputObjectSchema as CommentUpsertWithWhereUniqueWithoutCommenterInputObjectSchema } from './CommentUpsertWithWhereUniqueWithoutCommenterInput.schema';
import { CommentCreateManyCommenterInputEnvelopeObjectSchema as CommentCreateManyCommenterInputEnvelopeObjectSchema } from './CommentCreateManyCommenterInputEnvelope.schema';
import { CommentWhereUniqueInputObjectSchema as CommentWhereUniqueInputObjectSchema } from './CommentWhereUniqueInput.schema';
import { CommentUpdateWithWhereUniqueWithoutCommenterInputObjectSchema as CommentUpdateWithWhereUniqueWithoutCommenterInputObjectSchema } from './CommentUpdateWithWhereUniqueWithoutCommenterInput.schema';
import { CommentUpdateManyWithWhereWithoutCommenterInputObjectSchema as CommentUpdateManyWithWhereWithoutCommenterInputObjectSchema } from './CommentUpdateManyWithWhereWithoutCommenterInput.schema';
import { CommentScalarWhereInputObjectSchema as CommentScalarWhereInputObjectSchema } from './CommentScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CommentCreateWithoutCommenterInputObjectSchema), z.lazy(() => CommentCreateWithoutCommenterInputObjectSchema).array(), z.lazy(() => CommentUncheckedCreateWithoutCommenterInputObjectSchema), z.lazy(() => CommentUncheckedCreateWithoutCommenterInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CommentCreateOrConnectWithoutCommenterInputObjectSchema), z.lazy(() => CommentCreateOrConnectWithoutCommenterInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => CommentUpsertWithWhereUniqueWithoutCommenterInputObjectSchema), z.lazy(() => CommentUpsertWithWhereUniqueWithoutCommenterInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CommentCreateManyCommenterInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => CommentWhereUniqueInputObjectSchema), z.lazy(() => CommentWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => CommentWhereUniqueInputObjectSchema), z.lazy(() => CommentWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => CommentWhereUniqueInputObjectSchema), z.lazy(() => CommentWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => CommentWhereUniqueInputObjectSchema), z.lazy(() => CommentWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => CommentUpdateWithWhereUniqueWithoutCommenterInputObjectSchema), z.lazy(() => CommentUpdateWithWhereUniqueWithoutCommenterInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => CommentUpdateManyWithWhereWithoutCommenterInputObjectSchema), z.lazy(() => CommentUpdateManyWithWhereWithoutCommenterInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => CommentScalarWhereInputObjectSchema), z.lazy(() => CommentScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const CommentUpdateManyWithoutCommenterNestedInputObjectSchema: z.ZodType<Prisma.CommentUpdateManyWithoutCommenterNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentUpdateManyWithoutCommenterNestedInput>;
export const CommentUpdateManyWithoutCommenterNestedInputObjectZodSchema = makeSchema();
