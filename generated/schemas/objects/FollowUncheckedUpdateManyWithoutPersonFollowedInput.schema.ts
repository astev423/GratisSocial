import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  followerId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const FollowUncheckedUpdateManyWithoutPersonFollowedInputObjectSchema: z.ZodType<Prisma.FollowUncheckedUpdateManyWithoutPersonFollowedInput> = makeSchema() as unknown as z.ZodType<Prisma.FollowUncheckedUpdateManyWithoutPersonFollowedInput>;
export const FollowUncheckedUpdateManyWithoutPersonFollowedInputObjectZodSchema = makeSchema();
