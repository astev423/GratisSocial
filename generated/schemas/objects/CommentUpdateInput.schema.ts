import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutCommentsNestedInputObjectSchema as UserUpdateOneRequiredWithoutCommentsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutCommentsNestedInput.schema';
import { PostUpdateOneRequiredWithoutCommentsNestedInputObjectSchema as PostUpdateOneRequiredWithoutCommentsNestedInputObjectSchema } from './PostUpdateOneRequiredWithoutCommentsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  content: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  commenter: z.lazy(() => UserUpdateOneRequiredWithoutCommentsNestedInputObjectSchema).optional(),
  post: z.lazy(() => PostUpdateOneRequiredWithoutCommentsNestedInputObjectSchema).optional()
}).strict();
export const CommentUpdateInputObjectSchema: z.ZodType<Prisma.CommentUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentUpdateInput>;
export const CommentUpdateInputObjectZodSchema = makeSchema();
