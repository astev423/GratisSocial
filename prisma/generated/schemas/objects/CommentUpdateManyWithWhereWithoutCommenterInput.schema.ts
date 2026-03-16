import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CommentScalarWhereInputObjectSchema as CommentScalarWhereInputObjectSchema } from './CommentScalarWhereInput.schema';
import { CommentUpdateManyMutationInputObjectSchema as CommentUpdateManyMutationInputObjectSchema } from './CommentUpdateManyMutationInput.schema';
import { CommentUncheckedUpdateManyWithoutCommenterInputObjectSchema as CommentUncheckedUpdateManyWithoutCommenterInputObjectSchema } from './CommentUncheckedUpdateManyWithoutCommenterInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CommentScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => CommentUpdateManyMutationInputObjectSchema), z.lazy(() => CommentUncheckedUpdateManyWithoutCommenterInputObjectSchema)])
}).strict();
export const CommentUpdateManyWithWhereWithoutCommenterInputObjectSchema: z.ZodType<Prisma.CommentUpdateManyWithWhereWithoutCommenterInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentUpdateManyWithWhereWithoutCommenterInput>;
export const CommentUpdateManyWithWhereWithoutCommenterInputObjectZodSchema = makeSchema();
