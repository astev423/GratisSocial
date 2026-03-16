import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FollowWhereUniqueInputObjectSchema as FollowWhereUniqueInputObjectSchema } from './FollowWhereUniqueInput.schema';
import { FollowUpdateWithoutPersonFollowedInputObjectSchema as FollowUpdateWithoutPersonFollowedInputObjectSchema } from './FollowUpdateWithoutPersonFollowedInput.schema';
import { FollowUncheckedUpdateWithoutPersonFollowedInputObjectSchema as FollowUncheckedUpdateWithoutPersonFollowedInputObjectSchema } from './FollowUncheckedUpdateWithoutPersonFollowedInput.schema';
import { FollowCreateWithoutPersonFollowedInputObjectSchema as FollowCreateWithoutPersonFollowedInputObjectSchema } from './FollowCreateWithoutPersonFollowedInput.schema';
import { FollowUncheckedCreateWithoutPersonFollowedInputObjectSchema as FollowUncheckedCreateWithoutPersonFollowedInputObjectSchema } from './FollowUncheckedCreateWithoutPersonFollowedInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FollowWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => FollowUpdateWithoutPersonFollowedInputObjectSchema), z.lazy(() => FollowUncheckedUpdateWithoutPersonFollowedInputObjectSchema)]),
  create: z.union([z.lazy(() => FollowCreateWithoutPersonFollowedInputObjectSchema), z.lazy(() => FollowUncheckedCreateWithoutPersonFollowedInputObjectSchema)])
}).strict();
export const FollowUpsertWithWhereUniqueWithoutPersonFollowedInputObjectSchema: z.ZodType<Prisma.FollowUpsertWithWhereUniqueWithoutPersonFollowedInput> = makeSchema() as unknown as z.ZodType<Prisma.FollowUpsertWithWhereUniqueWithoutPersonFollowedInput>;
export const FollowUpsertWithWhereUniqueWithoutPersonFollowedInputObjectZodSchema = makeSchema();
