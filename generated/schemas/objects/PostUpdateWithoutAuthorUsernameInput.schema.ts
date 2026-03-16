import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutPostsByIdNestedInputObjectSchema as UserUpdateOneRequiredWithoutPostsByIdNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutPostsByIdNestedInput.schema';
import { CommentUpdateManyWithoutPostNestedInputObjectSchema as CommentUpdateManyWithoutPostNestedInputObjectSchema } from './CommentUpdateManyWithoutPostNestedInput.schema';
import { LikeUpdateManyWithoutPostNestedInputObjectSchema as LikeUpdateManyWithoutPostNestedInputObjectSchema } from './LikeUpdateManyWithoutPostNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  content: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  commentCount: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  likeCount: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  author: z.lazy(() => UserUpdateOneRequiredWithoutPostsByIdNestedInputObjectSchema).optional(),
  comments: z.lazy(() => CommentUpdateManyWithoutPostNestedInputObjectSchema).optional(),
  likes: z.lazy(() => LikeUpdateManyWithoutPostNestedInputObjectSchema).optional()
}).strict();
export const PostUpdateWithoutAuthorUsernameInputObjectSchema: z.ZodType<Prisma.PostUpdateWithoutAuthorUsernameInput> = makeSchema() as unknown as z.ZodType<Prisma.PostUpdateWithoutAuthorUsernameInput>;
export const PostUpdateWithoutAuthorUsernameInputObjectZodSchema = makeSchema();
