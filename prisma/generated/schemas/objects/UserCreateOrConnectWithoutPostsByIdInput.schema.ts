import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutPostsByIdInputObjectSchema as UserCreateWithoutPostsByIdInputObjectSchema } from './UserCreateWithoutPostsByIdInput.schema';
import { UserUncheckedCreateWithoutPostsByIdInputObjectSchema as UserUncheckedCreateWithoutPostsByIdInputObjectSchema } from './UserUncheckedCreateWithoutPostsByIdInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutPostsByIdInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutPostsByIdInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutPostsByIdInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutPostsByIdInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutPostsByIdInput>;
export const UserCreateOrConnectWithoutPostsByIdInputObjectZodSchema = makeSchema();
