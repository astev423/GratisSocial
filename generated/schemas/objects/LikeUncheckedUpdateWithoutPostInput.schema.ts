import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  liked: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  likerId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const LikeUncheckedUpdateWithoutPostInputObjectSchema: z.ZodType<Prisma.LikeUncheckedUpdateWithoutPostInput> = makeSchema() as unknown as z.ZodType<Prisma.LikeUncheckedUpdateWithoutPostInput>;
export const LikeUncheckedUpdateWithoutPostInputObjectZodSchema = makeSchema();
