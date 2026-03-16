import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutPostsByIdInputObjectSchema as UserUpdateWithoutPostsByIdInputObjectSchema } from './UserUpdateWithoutPostsByIdInput.schema';
import { UserUncheckedUpdateWithoutPostsByIdInputObjectSchema as UserUncheckedUpdateWithoutPostsByIdInputObjectSchema } from './UserUncheckedUpdateWithoutPostsByIdInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutPostsByIdInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutPostsByIdInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutPostsByIdInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutPostsByIdInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutPostsByIdInput>;
export const UserUpdateToOneWithWhereWithoutPostsByIdInputObjectZodSchema = makeSchema();
