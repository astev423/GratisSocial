import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutFollowingNestedInputObjectSchema as UserUpdateOneRequiredWithoutFollowingNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutFollowingNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  personFollowed: z.lazy(() => UserUpdateOneRequiredWithoutFollowingNestedInputObjectSchema).optional()
}).strict();
export const FollowUpdateWithoutFollowerInputObjectSchema: z.ZodType<Prisma.FollowUpdateWithoutFollowerInput> = makeSchema() as unknown as z.ZodType<Prisma.FollowUpdateWithoutFollowerInput>;
export const FollowUpdateWithoutFollowerInputObjectZodSchema = makeSchema();
