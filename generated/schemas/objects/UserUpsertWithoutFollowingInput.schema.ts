import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserUpdateWithoutFollowingInputObjectSchema as UserUpdateWithoutFollowingInputObjectSchema } from './UserUpdateWithoutFollowingInput.schema';
import { UserUncheckedUpdateWithoutFollowingInputObjectSchema as UserUncheckedUpdateWithoutFollowingInputObjectSchema } from './UserUncheckedUpdateWithoutFollowingInput.schema';
import { UserCreateWithoutFollowingInputObjectSchema as UserCreateWithoutFollowingInputObjectSchema } from './UserCreateWithoutFollowingInput.schema';
import { UserUncheckedCreateWithoutFollowingInputObjectSchema as UserUncheckedCreateWithoutFollowingInputObjectSchema } from './UserUncheckedCreateWithoutFollowingInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutFollowingInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutFollowingInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutFollowingInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutFollowingInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutFollowingInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutFollowingInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutFollowingInput>;
export const UserUpsertWithoutFollowingInputObjectZodSchema = makeSchema();
