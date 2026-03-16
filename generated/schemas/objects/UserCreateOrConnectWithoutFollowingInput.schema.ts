import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutFollowingInputObjectSchema as UserCreateWithoutFollowingInputObjectSchema } from './UserCreateWithoutFollowingInput.schema';
import { UserUncheckedCreateWithoutFollowingInputObjectSchema as UserUncheckedCreateWithoutFollowingInputObjectSchema } from './UserUncheckedCreateWithoutFollowingInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutFollowingInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutFollowingInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutFollowingInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutFollowingInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutFollowingInput>;
export const UserCreateOrConnectWithoutFollowingInputObjectZodSchema = makeSchema();
