import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateNestedOneWithoutFollowingInputObjectSchema as UserCreateNestedOneWithoutFollowingInputObjectSchema } from './UserCreateNestedOneWithoutFollowingInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  personFollowed: z.lazy(() => UserCreateNestedOneWithoutFollowingInputObjectSchema)
}).strict();
export const FollowCreateWithoutFollowerInputObjectSchema: z.ZodType<Prisma.FollowCreateWithoutFollowerInput> = makeSchema() as unknown as z.ZodType<Prisma.FollowCreateWithoutFollowerInput>;
export const FollowCreateWithoutFollowerInputObjectZodSchema = makeSchema();
