import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutFollowingInputObjectSchema as UserCreateWithoutFollowingInputObjectSchema } from './UserCreateWithoutFollowingInput.schema';
import { UserUncheckedCreateWithoutFollowingInputObjectSchema as UserUncheckedCreateWithoutFollowingInputObjectSchema } from './UserUncheckedCreateWithoutFollowingInput.schema';
import { UserCreateOrConnectWithoutFollowingInputObjectSchema as UserCreateOrConnectWithoutFollowingInputObjectSchema } from './UserCreateOrConnectWithoutFollowingInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutFollowingInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutFollowingInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutFollowingInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutFollowingInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutFollowingInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutFollowingInput>;
export const UserCreateNestedOneWithoutFollowingInputObjectZodSchema = makeSchema();
