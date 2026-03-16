import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CommentCreateWithoutCommenterInputObjectSchema as CommentCreateWithoutCommenterInputObjectSchema } from './CommentCreateWithoutCommenterInput.schema';
import { CommentUncheckedCreateWithoutCommenterInputObjectSchema as CommentUncheckedCreateWithoutCommenterInputObjectSchema } from './CommentUncheckedCreateWithoutCommenterInput.schema';
import { CommentCreateOrConnectWithoutCommenterInputObjectSchema as CommentCreateOrConnectWithoutCommenterInputObjectSchema } from './CommentCreateOrConnectWithoutCommenterInput.schema';
import { CommentCreateManyCommenterInputEnvelopeObjectSchema as CommentCreateManyCommenterInputEnvelopeObjectSchema } from './CommentCreateManyCommenterInputEnvelope.schema';
import { CommentWhereUniqueInputObjectSchema as CommentWhereUniqueInputObjectSchema } from './CommentWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CommentCreateWithoutCommenterInputObjectSchema), z.lazy(() => CommentCreateWithoutCommenterInputObjectSchema).array(), z.lazy(() => CommentUncheckedCreateWithoutCommenterInputObjectSchema), z.lazy(() => CommentUncheckedCreateWithoutCommenterInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CommentCreateOrConnectWithoutCommenterInputObjectSchema), z.lazy(() => CommentCreateOrConnectWithoutCommenterInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CommentCreateManyCommenterInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => CommentWhereUniqueInputObjectSchema), z.lazy(() => CommentWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const CommentUncheckedCreateNestedManyWithoutCommenterInputObjectSchema: z.ZodType<Prisma.CommentUncheckedCreateNestedManyWithoutCommenterInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentUncheckedCreateNestedManyWithoutCommenterInput>;
export const CommentUncheckedCreateNestedManyWithoutCommenterInputObjectZodSchema = makeSchema();
