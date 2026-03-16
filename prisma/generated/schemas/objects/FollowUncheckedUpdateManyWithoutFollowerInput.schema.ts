import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  personFollowedId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const FollowUncheckedUpdateManyWithoutFollowerInputObjectSchema: z.ZodType<Prisma.FollowUncheckedUpdateManyWithoutFollowerInput> = makeSchema() as unknown as z.ZodType<Prisma.FollowUncheckedUpdateManyWithoutFollowerInput>;
export const FollowUncheckedUpdateManyWithoutFollowerInputObjectZodSchema = makeSchema();
