import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { PostUpdateOneRequiredWithoutCommentsNestedInputObjectSchema as PostUpdateOneRequiredWithoutCommentsNestedInputObjectSchema } from './PostUpdateOneRequiredWithoutCommentsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  content: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  post: z.lazy(() => PostUpdateOneRequiredWithoutCommentsNestedInputObjectSchema).optional()
}).strict();
export const CommentUpdateWithoutCommenterInputObjectSchema: z.ZodType<Prisma.CommentUpdateWithoutCommenterInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentUpdateWithoutCommenterInput>;
export const CommentUpdateWithoutCommenterInputObjectZodSchema = makeSchema();
