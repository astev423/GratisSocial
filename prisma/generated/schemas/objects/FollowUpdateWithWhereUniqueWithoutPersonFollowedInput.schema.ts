import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FollowWhereUniqueInputObjectSchema as FollowWhereUniqueInputObjectSchema } from './FollowWhereUniqueInput.schema';
import { FollowUpdateWithoutPersonFollowedInputObjectSchema as FollowUpdateWithoutPersonFollowedInputObjectSchema } from './FollowUpdateWithoutPersonFollowedInput.schema';
import { FollowUncheckedUpdateWithoutPersonFollowedInputObjectSchema as FollowUncheckedUpdateWithoutPersonFollowedInputObjectSchema } from './FollowUncheckedUpdateWithoutPersonFollowedInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FollowWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => FollowUpdateWithoutPersonFollowedInputObjectSchema), z.lazy(() => FollowUncheckedUpdateWithoutPersonFollowedInputObjectSchema)])
}).strict();
export const FollowUpdateWithWhereUniqueWithoutPersonFollowedInputObjectSchema: z.ZodType<Prisma.FollowUpdateWithWhereUniqueWithoutPersonFollowedInput> = makeSchema() as unknown as z.ZodType<Prisma.FollowUpdateWithWhereUniqueWithoutPersonFollowedInput>;
export const FollowUpdateWithWhereUniqueWithoutPersonFollowedInputObjectZodSchema = makeSchema();
