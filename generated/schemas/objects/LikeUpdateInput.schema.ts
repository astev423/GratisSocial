import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutLikesNestedInputObjectSchema as UserUpdateOneRequiredWithoutLikesNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutLikesNestedInput.schema';
import { PostUpdateOneRequiredWithoutLikesNestedInputObjectSchema as PostUpdateOneRequiredWithoutLikesNestedInputObjectSchema } from './PostUpdateOneRequiredWithoutLikesNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  liked: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  liker: z.lazy(() => UserUpdateOneRequiredWithoutLikesNestedInputObjectSchema).optional(),
  post: z.lazy(() => PostUpdateOneRequiredWithoutLikesNestedInputObjectSchema).optional()
}).strict();
export const LikeUpdateInputObjectSchema: z.ZodType<Prisma.LikeUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.LikeUpdateInput>;
export const LikeUpdateInputObjectZodSchema = makeSchema();
