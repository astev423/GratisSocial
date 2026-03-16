import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutPostsByUsernameNestedInputObjectSchema as UserUpdateOneRequiredWithoutPostsByUsernameNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutPostsByUsernameNestedInput.schema';
import { CommentUpdateManyWithoutPostNestedInputObjectSchema as CommentUpdateManyWithoutPostNestedInputObjectSchema } from './CommentUpdateManyWithoutPostNestedInput.schema';
import { LikeUpdateManyWithoutPostNestedInputObjectSchema as LikeUpdateManyWithoutPostNestedInputObjectSchema } from './LikeUpdateManyWithoutPostNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  content: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  commentCount: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  likeCount: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  authorUsername: z.lazy(() => UserUpdateOneRequiredWithoutPostsByUsernameNestedInputObjectSchema).optional(),
  comments: z.lazy(() => CommentUpdateManyWithoutPostNestedInputObjectSchema).optional(),
  likes: z.lazy(() => LikeUpdateManyWithoutPostNestedInputObjectSchema).optional()
}).strict();
export const PostUpdateWithoutAuthorInputObjectSchema: z.ZodType<Prisma.PostUpdateWithoutAuthorInput> = makeSchema() as unknown as z.ZodType<Prisma.PostUpdateWithoutAuthorInput>;
export const PostUpdateWithoutAuthorInputObjectZodSchema = makeSchema();
