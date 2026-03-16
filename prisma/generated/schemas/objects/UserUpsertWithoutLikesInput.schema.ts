import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserUpdateWithoutLikesInputObjectSchema as UserUpdateWithoutLikesInputObjectSchema } from './UserUpdateWithoutLikesInput.schema';
import { UserUncheckedUpdateWithoutLikesInputObjectSchema as UserUncheckedUpdateWithoutLikesInputObjectSchema } from './UserUncheckedUpdateWithoutLikesInput.schema';
import { UserCreateWithoutLikesInputObjectSchema as UserCreateWithoutLikesInputObjectSchema } from './UserCreateWithoutLikesInput.schema';
import { UserUncheckedCreateWithoutLikesInputObjectSchema as UserUncheckedCreateWithoutLikesInputObjectSchema } from './UserUncheckedCreateWithoutLikesInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutLikesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutLikesInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutLikesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutLikesInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutLikesInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutLikesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutLikesInput>;
export const UserUpsertWithoutLikesInputObjectZodSchema = makeSchema();
