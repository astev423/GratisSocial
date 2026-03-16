import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const FollowUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.FollowUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.FollowUpdateManyMutationInput>;
export const FollowUpdateManyMutationInputObjectZodSchema = makeSchema();
