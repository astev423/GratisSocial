import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutPostsByIdInputObjectSchema as UserCreateWithoutPostsByIdInputObjectSchema } from './UserCreateWithoutPostsByIdInput.schema';
import { UserUncheckedCreateWithoutPostsByIdInputObjectSchema as UserUncheckedCreateWithoutPostsByIdInputObjectSchema } from './UserUncheckedCreateWithoutPostsByIdInput.schema';
import { UserCreateOrConnectWithoutPostsByIdInputObjectSchema as UserCreateOrConnectWithoutPostsByIdInputObjectSchema } from './UserCreateOrConnectWithoutPostsByIdInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutPostsByIdInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutPostsByIdInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutPostsByIdInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutPostsByIdInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutPostsByIdInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutPostsByIdInput>;
export const UserCreateNestedOneWithoutPostsByIdInputObjectZodSchema = makeSchema();
