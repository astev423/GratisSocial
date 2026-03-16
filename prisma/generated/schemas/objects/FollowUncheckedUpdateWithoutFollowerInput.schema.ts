import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  personFollowedId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const FollowUncheckedUpdateWithoutFollowerInputObjectSchema: z.ZodType<Prisma.FollowUncheckedUpdateWithoutFollowerInput> = makeSchema() as unknown as z.ZodType<Prisma.FollowUncheckedUpdateWithoutFollowerInput>;
export const FollowUncheckedUpdateWithoutFollowerInputObjectZodSchema = makeSchema();
