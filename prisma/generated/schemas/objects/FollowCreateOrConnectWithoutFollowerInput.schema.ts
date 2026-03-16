import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FollowWhereUniqueInputObjectSchema as FollowWhereUniqueInputObjectSchema } from './FollowWhereUniqueInput.schema';
import { FollowCreateWithoutFollowerInputObjectSchema as FollowCreateWithoutFollowerInputObjectSchema } from './FollowCreateWithoutFollowerInput.schema';
import { FollowUncheckedCreateWithoutFollowerInputObjectSchema as FollowUncheckedCreateWithoutFollowerInputObjectSchema } from './FollowUncheckedCreateWithoutFollowerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FollowWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => FollowCreateWithoutFollowerInputObjectSchema), z.lazy(() => FollowUncheckedCreateWithoutFollowerInputObjectSchema)])
}).strict();
export const FollowCreateOrConnectWithoutFollowerInputObjectSchema: z.ZodType<Prisma.FollowCreateOrConnectWithoutFollowerInput> = makeSchema() as unknown as z.ZodType<Prisma.FollowCreateOrConnectWithoutFollowerInput>;
export const FollowCreateOrConnectWithoutFollowerInputObjectZodSchema = makeSchema();
