import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutFollowersNestedInputObjectSchema as UserUpdateOneRequiredWithoutFollowersNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutFollowersNestedInput.schema';
import { UserUpdateOneRequiredWithoutFollowingNestedInputObjectSchema as UserUpdateOneRequiredWithoutFollowingNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutFollowingNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  follower: z.lazy(() => UserUpdateOneRequiredWithoutFollowersNestedInputObjectSchema).optional(),
  personFollowed: z.lazy(() => UserUpdateOneRequiredWithoutFollowingNestedInputObjectSchema).optional()
}).strict();
export const FollowUpdateInputObjectSchema: z.ZodType<Prisma.FollowUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.FollowUpdateInput>;
export const FollowUpdateInputObjectZodSchema = makeSchema();
