import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutLikesInputObjectSchema as UserCreateWithoutLikesInputObjectSchema } from './UserCreateWithoutLikesInput.schema';
import { UserUncheckedCreateWithoutLikesInputObjectSchema as UserUncheckedCreateWithoutLikesInputObjectSchema } from './UserUncheckedCreateWithoutLikesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutLikesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutLikesInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutLikesInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutLikesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutLikesInput>;
export const UserCreateOrConnectWithoutLikesInputObjectZodSchema = makeSchema();
