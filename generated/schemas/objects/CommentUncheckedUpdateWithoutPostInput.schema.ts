import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  content: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  commenterUsername: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const CommentUncheckedUpdateWithoutPostInputObjectSchema: z.ZodType<Prisma.CommentUncheckedUpdateWithoutPostInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentUncheckedUpdateWithoutPostInput>;
export const CommentUncheckedUpdateWithoutPostInputObjectZodSchema = makeSchema();
