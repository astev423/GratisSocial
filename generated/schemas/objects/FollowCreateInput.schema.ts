import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateNestedOneWithoutFollowersInputObjectSchema as UserCreateNestedOneWithoutFollowersInputObjectSchema } from './UserCreateNestedOneWithoutFollowersInput.schema';
import { UserCreateNestedOneWithoutFollowingInputObjectSchema as UserCreateNestedOneWithoutFollowingInputObjectSchema } from './UserCreateNestedOneWithoutFollowingInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  follower: z.lazy(() => UserCreateNestedOneWithoutFollowersInputObjectSchema),
  personFollowed: z.lazy(() => UserCreateNestedOneWithoutFollowingInputObjectSchema)
}).strict();
export const FollowCreateInputObjectSchema: z.ZodType<Prisma.FollowCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.FollowCreateInput>;
export const FollowCreateInputObjectZodSchema = makeSchema();
