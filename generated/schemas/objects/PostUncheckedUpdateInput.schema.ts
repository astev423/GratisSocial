import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { CommentUncheckedUpdateManyWithoutPostNestedInputObjectSchema as CommentUncheckedUpdateManyWithoutPostNestedInputObjectSchema } from './CommentUncheckedUpdateManyWithoutPostNestedInput.schema';
import { LikeUncheckedUpdateManyWithoutPostNestedInputObjectSchema as LikeUncheckedUpdateManyWithoutPostNestedInputObjectSchema } from './LikeUncheckedUpdateManyWithoutPostNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  content: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  authorId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  posterUsername: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  commentCount: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  likeCount: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  comments: z.lazy(() => CommentUncheckedUpdateManyWithoutPostNestedInputObjectSchema).optional(),
  likes: z.lazy(() => LikeUncheckedUpdateManyWithoutPostNestedInputObjectSchema).optional()
}).strict();
export const PostUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.PostUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.PostUncheckedUpdateInput>;
export const PostUncheckedUpdateInputObjectZodSchema = makeSchema();
