import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CommentWhereUniqueInputObjectSchema as CommentWhereUniqueInputObjectSchema } from './CommentWhereUniqueInput.schema';
import { CommentCreateWithoutCommenterInputObjectSchema as CommentCreateWithoutCommenterInputObjectSchema } from './CommentCreateWithoutCommenterInput.schema';
import { CommentUncheckedCreateWithoutCommenterInputObjectSchema as CommentUncheckedCreateWithoutCommenterInputObjectSchema } from './CommentUncheckedCreateWithoutCommenterInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CommentWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CommentCreateWithoutCommenterInputObjectSchema), z.lazy(() => CommentUncheckedCreateWithoutCommenterInputObjectSchema)])
}).strict();
export const CommentCreateOrConnectWithoutCommenterInputObjectSchema: z.ZodType<Prisma.CommentCreateOrConnectWithoutCommenterInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentCreateOrConnectWithoutCommenterInput>;
export const CommentCreateOrConnectWithoutCommenterInputObjectZodSchema = makeSchema();
