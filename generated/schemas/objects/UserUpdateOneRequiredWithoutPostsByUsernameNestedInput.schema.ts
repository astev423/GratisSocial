import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutPostsByUsernameInputObjectSchema as UserCreateWithoutPostsByUsernameInputObjectSchema } from './UserCreateWithoutPostsByUsernameInput.schema';
import { UserUncheckedCreateWithoutPostsByUsernameInputObjectSchema as UserUncheckedCreateWithoutPostsByUsernameInputObjectSchema } from './UserUncheckedCreateWithoutPostsByUsernameInput.schema';
import { UserCreateOrConnectWithoutPostsByUsernameInputObjectSchema as UserCreateOrConnectWithoutPostsByUsernameInputObjectSchema } from './UserCreateOrConnectWithoutPostsByUsernameInput.schema';
import { UserUpsertWithoutPostsByUsernameInputObjectSchema as UserUpsertWithoutPostsByUsernameInputObjectSchema } from './UserUpsertWithoutPostsByUsernameInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutPostsByUsernameInputObjectSchema as UserUpdateToOneWithWhereWithoutPostsByUsernameInputObjectSchema } from './UserUpdateToOneWithWhereWithoutPostsByUsernameInput.schema';
import { UserUpdateWithoutPostsByUsernameInputObjectSchema as UserUpdateWithoutPostsByUsernameInputObjectSchema } from './UserUpdateWithoutPostsByUsernameInput.schema';
import { UserUncheckedUpdateWithoutPostsByUsernameInputObjectSchema as UserUncheckedUpdateWithoutPostsByUsernameInputObjectSchema } from './UserUncheckedUpdateWithoutPostsByUsernameInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutPostsByUsernameInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutPostsByUsernameInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutPostsByUsernameInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutPostsByUsernameInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutPostsByUsernameInputObjectSchema), z.lazy(() => UserUpdateWithoutPostsByUsernameInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutPostsByUsernameInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutPostsByUsernameNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutPostsByUsernameNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutPostsByUsernameNestedInput>;
export const UserUpdateOneRequiredWithoutPostsByUsernameNestedInputObjectZodSchema = makeSchema();
