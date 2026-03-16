import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { PostUpdateOneRequiredWithoutLikesNestedInputObjectSchema as PostUpdateOneRequiredWithoutLikesNestedInputObjectSchema } from './PostUpdateOneRequiredWithoutLikesNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  liked: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  post: z.lazy(() => PostUpdateOneRequiredWithoutLikesNestedInputObjectSchema).optional()
}).strict();
export const LikeUpdateWithoutLikerInputObjectSchema: z.ZodType<Prisma.LikeUpdateWithoutLikerInput> = makeSchema() as unknown as z.ZodType<Prisma.LikeUpdateWithoutLikerInput>;
export const LikeUpdateWithoutLikerInputObjectZodSchema = makeSchema();
