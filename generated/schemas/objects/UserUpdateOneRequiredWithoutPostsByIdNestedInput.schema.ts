import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutPostsByIdInputObjectSchema as UserCreateWithoutPostsByIdInputObjectSchema } from './UserCreateWithoutPostsByIdInput.schema';
import { UserUncheckedCreateWithoutPostsByIdInputObjectSchema as UserUncheckedCreateWithoutPostsByIdInputObjectSchema } from './UserUncheckedCreateWithoutPostsByIdInput.schema';
import { UserCreateOrConnectWithoutPostsByIdInputObjectSchema as UserCreateOrConnectWithoutPostsByIdInputObjectSchema } from './UserCreateOrConnectWithoutPostsByIdInput.schema';
import { UserUpsertWithoutPostsByIdInputObjectSchema as UserUpsertWithoutPostsByIdInputObjectSchema } from './UserUpsertWithoutPostsByIdInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutPostsByIdInputObjectSchema as UserUpdateToOneWithWhereWithoutPostsByIdInputObjectSchema } from './UserUpdateToOneWithWhereWithoutPostsByIdInput.schema';
import { UserUpdateWithoutPostsByIdInputObjectSchema as UserUpdateWithoutPostsByIdInputObjectSchema } from './UserUpdateWithoutPostsByIdInput.schema';
import { UserUncheckedUpdateWithoutPostsByIdInputObjectSchema as UserUncheckedUpdateWithoutPostsByIdInputObjectSchema } from './UserUncheckedUpdateWithoutPostsByIdInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutPostsByIdInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutPostsByIdInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutPostsByIdInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutPostsByIdInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutPostsByIdInputObjectSchema), z.lazy(() => UserUpdateWithoutPostsByIdInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutPostsByIdInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutPostsByIdNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutPostsByIdNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutPostsByIdNestedInput>;
export const UserUpdateOneRequiredWithoutPostsByIdNestedInputObjectZodSchema = makeSchema();
