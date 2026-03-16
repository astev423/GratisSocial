import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutFollowersNestedInputObjectSchema as UserUpdateOneRequiredWithoutFollowersNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutFollowersNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  follower: z.lazy(() => UserUpdateOneRequiredWithoutFollowersNestedInputObjectSchema).optional()
}).strict();
export const FollowUpdateWithoutPersonFollowedInputObjectSchema: z.ZodType<Prisma.FollowUpdateWithoutPersonFollowedInput> = makeSchema() as unknown as z.ZodType<Prisma.FollowUpdateWithoutPersonFollowedInput>;
export const FollowUpdateWithoutPersonFollowedInputObjectZodSchema = makeSchema();
