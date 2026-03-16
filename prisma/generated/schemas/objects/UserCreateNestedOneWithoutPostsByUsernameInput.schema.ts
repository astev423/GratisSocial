import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutPostsByUsernameInputObjectSchema as UserCreateWithoutPostsByUsernameInputObjectSchema } from './UserCreateWithoutPostsByUsernameInput.schema';
import { UserUncheckedCreateWithoutPostsByUsernameInputObjectSchema as UserUncheckedCreateWithoutPostsByUsernameInputObjectSchema } from './UserUncheckedCreateWithoutPostsByUsernameInput.schema';
import { UserCreateOrConnectWithoutPostsByUsernameInputObjectSchema as UserCreateOrConnectWithoutPostsByUsernameInputObjectSchema } from './UserCreateOrConnectWithoutPostsByUsernameInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutPostsByUsernameInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutPostsByUsernameInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutPostsByUsernameInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutPostsByUsernameInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutPostsByUsernameInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutPostsByUsernameInput>;
export const UserCreateNestedOneWithoutPostsByUsernameInputObjectZodSchema = makeSchema();
