import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserUpdateWithoutPostsByUsernameInputObjectSchema as UserUpdateWithoutPostsByUsernameInputObjectSchema } from './UserUpdateWithoutPostsByUsernameInput.schema';
import { UserUncheckedUpdateWithoutPostsByUsernameInputObjectSchema as UserUncheckedUpdateWithoutPostsByUsernameInputObjectSchema } from './UserUncheckedUpdateWithoutPostsByUsernameInput.schema';
import { UserCreateWithoutPostsByUsernameInputObjectSchema as UserCreateWithoutPostsByUsernameInputObjectSchema } from './UserCreateWithoutPostsByUsernameInput.schema';
import { UserUncheckedCreateWithoutPostsByUsernameInputObjectSchema as UserUncheckedCreateWithoutPostsByUsernameInputObjectSchema } from './UserUncheckedCreateWithoutPostsByUsernameInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutPostsByUsernameInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutPostsByUsernameInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutPostsByUsernameInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutPostsByUsernameInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutPostsByUsernameInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutPostsByUsernameInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutPostsByUsernameInput>;
export const UserUpsertWithoutPostsByUsernameInputObjectZodSchema = makeSchema();
