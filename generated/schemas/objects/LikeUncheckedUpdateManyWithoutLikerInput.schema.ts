import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  liked: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  postId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const LikeUncheckedUpdateManyWithoutLikerInputObjectSchema: z.ZodType<Prisma.LikeUncheckedUpdateManyWithoutLikerInput> = makeSchema() as unknown as z.ZodType<Prisma.LikeUncheckedUpdateManyWithoutLikerInput>;
export const LikeUncheckedUpdateManyWithoutLikerInputObjectZodSchema = makeSchema();
