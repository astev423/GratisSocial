import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutCommentsNestedInputObjectSchema as UserUpdateOneRequiredWithoutCommentsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutCommentsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  content: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  commenter: z.lazy(() => UserUpdateOneRequiredWithoutCommentsNestedInputObjectSchema).optional()
}).strict();
export const CommentUpdateWithoutPostInputObjectSchema: z.ZodType<Prisma.CommentUpdateWithoutPostInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentUpdateWithoutPostInput>;
export const CommentUpdateWithoutPostInputObjectZodSchema = makeSchema();
