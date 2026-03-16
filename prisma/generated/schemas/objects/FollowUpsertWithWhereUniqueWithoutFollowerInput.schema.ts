import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FollowWhereUniqueInputObjectSchema as FollowWhereUniqueInputObjectSchema } from './FollowWhereUniqueInput.schema';
import { FollowUpdateWithoutFollowerInputObjectSchema as FollowUpdateWithoutFollowerInputObjectSchema } from './FollowUpdateWithoutFollowerInput.schema';
import { FollowUncheckedUpdateWithoutFollowerInputObjectSchema as FollowUncheckedUpdateWithoutFollowerInputObjectSchema } from './FollowUncheckedUpdateWithoutFollowerInput.schema';
import { FollowCreateWithoutFollowerInputObjectSchema as FollowCreateWithoutFollowerInputObjectSchema } from './FollowCreateWithoutFollowerInput.schema';
import { FollowUncheckedCreateWithoutFollowerInputObjectSchema as FollowUncheckedCreateWithoutFollowerInputObjectSchema } from './FollowUncheckedCreateWithoutFollowerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FollowWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => FollowUpdateWithoutFollowerInputObjectSchema), z.lazy(() => FollowUncheckedUpdateWithoutFollowerInputObjectSchema)]),
  create: z.union([z.lazy(() => FollowCreateWithoutFollowerInputObjectSchema), z.lazy(() => FollowUncheckedCreateWithoutFollowerInputObjectSchema)])
}).strict();
export const FollowUpsertWithWhereUniqueWithoutFollowerInputObjectSchema: z.ZodType<Prisma.FollowUpsertWithWhereUniqueWithoutFollowerInput> = makeSchema() as unknown as z.ZodType<Prisma.FollowUpsertWithWhereUniqueWithoutFollowerInput>;
export const FollowUpsertWithWhereUniqueWithoutFollowerInputObjectZodSchema = makeSchema();
