import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CommentWhereUniqueInputObjectSchema as CommentWhereUniqueInputObjectSchema } from './CommentWhereUniqueInput.schema';
import { CommentUpdateWithoutCommenterInputObjectSchema as CommentUpdateWithoutCommenterInputObjectSchema } from './CommentUpdateWithoutCommenterInput.schema';
import { CommentUncheckedUpdateWithoutCommenterInputObjectSchema as CommentUncheckedUpdateWithoutCommenterInputObjectSchema } from './CommentUncheckedUpdateWithoutCommenterInput.schema';
import { CommentCreateWithoutCommenterInputObjectSchema as CommentCreateWithoutCommenterInputObjectSchema } from './CommentCreateWithoutCommenterInput.schema';
import { CommentUncheckedCreateWithoutCommenterInputObjectSchema as CommentUncheckedCreateWithoutCommenterInputObjectSchema } from './CommentUncheckedCreateWithoutCommenterInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CommentWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => CommentUpdateWithoutCommenterInputObjectSchema), z.lazy(() => CommentUncheckedUpdateWithoutCommenterInputObjectSchema)]),
  create: z.union([z.lazy(() => CommentCreateWithoutCommenterInputObjectSchema), z.lazy(() => CommentUncheckedCreateWithoutCommenterInputObjectSchema)])
}).strict();
export const CommentUpsertWithWhereUniqueWithoutCommenterInputObjectSchema: z.ZodType<Prisma.CommentUpsertWithWhereUniqueWithoutCommenterInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentUpsertWithWhereUniqueWithoutCommenterInput>;
export const CommentUpsertWithWhereUniqueWithoutCommenterInputObjectZodSchema = makeSchema();
