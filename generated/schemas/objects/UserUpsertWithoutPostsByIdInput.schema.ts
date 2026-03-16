import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserUpdateWithoutPostsByIdInputObjectSchema as UserUpdateWithoutPostsByIdInputObjectSchema } from './UserUpdateWithoutPostsByIdInput.schema';
import { UserUncheckedUpdateWithoutPostsByIdInputObjectSchema as UserUncheckedUpdateWithoutPostsByIdInputObjectSchema } from './UserUncheckedUpdateWithoutPostsByIdInput.schema';
import { UserCreateWithoutPostsByIdInputObjectSchema as UserCreateWithoutPostsByIdInputObjectSchema } from './UserCreateWithoutPostsByIdInput.schema';
import { UserUncheckedCreateWithoutPostsByIdInputObjectSchema as UserUncheckedCreateWithoutPostsByIdInputObjectSchema } from './UserUncheckedCreateWithoutPostsByIdInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutPostsByIdInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutPostsByIdInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutPostsByIdInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutPostsByIdInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutPostsByIdInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutPostsByIdInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutPostsByIdInput>;
export const UserUpsertWithoutPostsByIdInputObjectZodSchema = makeSchema();
