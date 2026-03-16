import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutFollowingInputObjectSchema as UserCreateWithoutFollowingInputObjectSchema } from './UserCreateWithoutFollowingInput.schema';
import { UserUncheckedCreateWithoutFollowingInputObjectSchema as UserUncheckedCreateWithoutFollowingInputObjectSchema } from './UserUncheckedCreateWithoutFollowingInput.schema';
import { UserCreateOrConnectWithoutFollowingInputObjectSchema as UserCreateOrConnectWithoutFollowingInputObjectSchema } from './UserCreateOrConnectWithoutFollowingInput.schema';
import { UserUpsertWithoutFollowingInputObjectSchema as UserUpsertWithoutFollowingInputObjectSchema } from './UserUpsertWithoutFollowingInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutFollowingInputObjectSchema as UserUpdateToOneWithWhereWithoutFollowingInputObjectSchema } from './UserUpdateToOneWithWhereWithoutFollowingInput.schema';
import { UserUpdateWithoutFollowingInputObjectSchema as UserUpdateWithoutFollowingInputObjectSchema } from './UserUpdateWithoutFollowingInput.schema';
import { UserUncheckedUpdateWithoutFollowingInputObjectSchema as UserUncheckedUpdateWithoutFollowingInputObjectSchema } from './UserUncheckedUpdateWithoutFollowingInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutFollowingInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutFollowingInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutFollowingInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutFollowingInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutFollowingInputObjectSchema), z.lazy(() => UserUpdateWithoutFollowingInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutFollowingInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutFollowingNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutFollowingNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutFollowingNestedInput>;
export const UserUpdateOneRequiredWithoutFollowingNestedInputObjectZodSchema = makeSchema();
