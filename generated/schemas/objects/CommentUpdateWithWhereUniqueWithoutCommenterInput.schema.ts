import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CommentWhereUniqueInputObjectSchema as CommentWhereUniqueInputObjectSchema } from './CommentWhereUniqueInput.schema';
import { CommentUpdateWithoutCommenterInputObjectSchema as CommentUpdateWithoutCommenterInputObjectSchema } from './CommentUpdateWithoutCommenterInput.schema';
import { CommentUncheckedUpdateWithoutCommenterInputObjectSchema as CommentUncheckedUpdateWithoutCommenterInputObjectSchema } from './CommentUncheckedUpdateWithoutCommenterInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CommentWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => CommentUpdateWithoutCommenterInputObjectSchema), z.lazy(() => CommentUncheckedUpdateWithoutCommenterInputObjectSchema)])
}).strict();
export const CommentUpdateWithWhereUniqueWithoutCommenterInputObjectSchema: z.ZodType<Prisma.CommentUpdateWithWhereUniqueWithoutCommenterInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentUpdateWithWhereUniqueWithoutCommenterInput>;
export const CommentUpdateWithWhereUniqueWithoutCommenterInputObjectZodSchema = makeSchema();
