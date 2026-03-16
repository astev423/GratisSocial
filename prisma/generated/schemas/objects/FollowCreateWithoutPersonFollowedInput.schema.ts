import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateNestedOneWithoutFollowersInputObjectSchema as UserCreateNestedOneWithoutFollowersInputObjectSchema } from './UserCreateNestedOneWithoutFollowersInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  follower: z.lazy(() => UserCreateNestedOneWithoutFollowersInputObjectSchema)
}).strict();
export const FollowCreateWithoutPersonFollowedInputObjectSchema: z.ZodType<Prisma.FollowCreateWithoutPersonFollowedInput> = makeSchema() as unknown as z.ZodType<Prisma.FollowCreateWithoutPersonFollowedInput>;
export const FollowCreateWithoutPersonFollowedInputObjectZodSchema = makeSchema();
