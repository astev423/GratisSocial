import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutFollowingInputObjectSchema as UserUpdateWithoutFollowingInputObjectSchema } from './UserUpdateWithoutFollowingInput.schema';
import { UserUncheckedUpdateWithoutFollowingInputObjectSchema as UserUncheckedUpdateWithoutFollowingInputObjectSchema } from './UserUncheckedUpdateWithoutFollowingInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutFollowingInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutFollowingInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutFollowingInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutFollowingInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutFollowingInput>;
export const UserUpdateToOneWithWhereWithoutFollowingInputObjectZodSchema = makeSchema();
