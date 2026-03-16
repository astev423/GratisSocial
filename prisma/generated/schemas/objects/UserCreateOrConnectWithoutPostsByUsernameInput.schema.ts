import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutPostsByUsernameInputObjectSchema as UserCreateWithoutPostsByUsernameInputObjectSchema } from './UserCreateWithoutPostsByUsernameInput.schema';
import { UserUncheckedCreateWithoutPostsByUsernameInputObjectSchema as UserUncheckedCreateWithoutPostsByUsernameInputObjectSchema } from './UserUncheckedCreateWithoutPostsByUsernameInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutPostsByUsernameInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutPostsByUsernameInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutPostsByUsernameInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutPostsByUsernameInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutPostsByUsernameInput>;
export const UserCreateOrConnectWithoutPostsByUsernameInputObjectZodSchema = makeSchema();
