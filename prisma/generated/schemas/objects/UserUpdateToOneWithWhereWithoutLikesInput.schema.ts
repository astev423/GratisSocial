import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutLikesInputObjectSchema as UserUpdateWithoutLikesInputObjectSchema } from './UserUpdateWithoutLikesInput.schema';
import { UserUncheckedUpdateWithoutLikesInputObjectSchema as UserUncheckedUpdateWithoutLikesInputObjectSchema } from './UserUncheckedUpdateWithoutLikesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutLikesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutLikesInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutLikesInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutLikesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutLikesInput>;
export const UserUpdateToOneWithWhereWithoutLikesInputObjectZodSchema = makeSchema();
