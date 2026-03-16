import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutLikesNestedInputObjectSchema as UserUpdateOneRequiredWithoutLikesNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutLikesNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  liked: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  liker: z.lazy(() => UserUpdateOneRequiredWithoutLikesNestedInputObjectSchema).optional()
}).strict();
export const LikeUpdateWithoutPostInputObjectSchema: z.ZodType<Prisma.LikeUpdateWithoutPostInput> = makeSchema() as unknown as z.ZodType<Prisma.LikeUpdateWithoutPostInput>;
export const LikeUpdateWithoutPostInputObjectZodSchema = makeSchema();
