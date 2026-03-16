import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutPostsByUsernameInputObjectSchema as UserUpdateWithoutPostsByUsernameInputObjectSchema } from './UserUpdateWithoutPostsByUsernameInput.schema';
import { UserUncheckedUpdateWithoutPostsByUsernameInputObjectSchema as UserUncheckedUpdateWithoutPostsByUsernameInputObjectSchema } from './UserUncheckedUpdateWithoutPostsByUsernameInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutPostsByUsernameInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutPostsByUsernameInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutPostsByUsernameInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutPostsByUsernameInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutPostsByUsernameInput>;
export const UserUpdateToOneWithWhereWithoutPostsByUsernameInputObjectZodSchema = makeSchema();
