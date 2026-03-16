import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutLikesInputObjectSchema as UserCreateWithoutLikesInputObjectSchema } from './UserCreateWithoutLikesInput.schema';
import { UserUncheckedCreateWithoutLikesInputObjectSchema as UserUncheckedCreateWithoutLikesInputObjectSchema } from './UserUncheckedCreateWithoutLikesInput.schema';
import { UserCreateOrConnectWithoutLikesInputObjectSchema as UserCreateOrConnectWithoutLikesInputObjectSchema } from './UserCreateOrConnectWithoutLikesInput.schema';
import { UserUpsertWithoutLikesInputObjectSchema as UserUpsertWithoutLikesInputObjectSchema } from './UserUpsertWithoutLikesInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutLikesInputObjectSchema as UserUpdateToOneWithWhereWithoutLikesInputObjectSchema } from './UserUpdateToOneWithWhereWithoutLikesInput.schema';
import { UserUpdateWithoutLikesInputObjectSchema as UserUpdateWithoutLikesInputObjectSchema } from './UserUpdateWithoutLikesInput.schema';
import { UserUncheckedUpdateWithoutLikesInputObjectSchema as UserUncheckedUpdateWithoutLikesInputObjectSchema } from './UserUncheckedUpdateWithoutLikesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutLikesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutLikesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutLikesInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutLikesInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutLikesInputObjectSchema), z.lazy(() => UserUpdateWithoutLikesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutLikesInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutLikesNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutLikesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutLikesNestedInput>;
export const UserUpdateOneRequiredWithoutLikesNestedInputObjectZodSchema = makeSchema();
