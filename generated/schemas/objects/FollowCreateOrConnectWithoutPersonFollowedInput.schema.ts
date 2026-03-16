import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FollowWhereUniqueInputObjectSchema as FollowWhereUniqueInputObjectSchema } from './FollowWhereUniqueInput.schema';
import { FollowCreateWithoutPersonFollowedInputObjectSchema as FollowCreateWithoutPersonFollowedInputObjectSchema } from './FollowCreateWithoutPersonFollowedInput.schema';
import { FollowUncheckedCreateWithoutPersonFollowedInputObjectSchema as FollowUncheckedCreateWithoutPersonFollowedInputObjectSchema } from './FollowUncheckedCreateWithoutPersonFollowedInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FollowWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => FollowCreateWithoutPersonFollowedInputObjectSchema), z.lazy(() => FollowUncheckedCreateWithoutPersonFollowedInputObjectSchema)])
}).strict();
export const FollowCreateOrConnectWithoutPersonFollowedInputObjectSchema: z.ZodType<Prisma.FollowCreateOrConnectWithoutPersonFollowedInput> = makeSchema() as unknown as z.ZodType<Prisma.FollowCreateOrConnectWithoutPersonFollowedInput>;
export const FollowCreateOrConnectWithoutPersonFollowedInputObjectZodSchema = makeSchema();
