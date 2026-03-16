import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutLikesInputObjectSchema as UserCreateWithoutLikesInputObjectSchema } from './UserCreateWithoutLikesInput.schema';
import { UserUncheckedCreateWithoutLikesInputObjectSchema as UserUncheckedCreateWithoutLikesInputObjectSchema } from './UserUncheckedCreateWithoutLikesInput.schema';
import { UserCreateOrConnectWithoutLikesInputObjectSchema as UserCreateOrConnectWithoutLikesInputObjectSchema } from './UserCreateOrConnectWithoutLikesInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutLikesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutLikesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutLikesInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutLikesInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutLikesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutLikesInput>;
export const UserCreateNestedOneWithoutLikesInputObjectZodSchema = makeSchema();
