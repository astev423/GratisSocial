import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  content: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  postId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const CommentUncheckedUpdateWithoutCommenterInputObjectSchema: z.ZodType<Prisma.CommentUncheckedUpdateWithoutCommenterInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentUncheckedUpdateWithoutCommenterInput>;
export const CommentUncheckedUpdateWithoutCommenterInputObjectZodSchema = makeSchema();
