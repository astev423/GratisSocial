import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FollowWhereUniqueInputObjectSchema as FollowWhereUniqueInputObjectSchema } from './FollowWhereUniqueInput.schema';
import { FollowUpdateWithoutFollowerInputObjectSchema as FollowUpdateWithoutFollowerInputObjectSchema } from './FollowUpdateWithoutFollowerInput.schema';
import { FollowUncheckedUpdateWithoutFollowerInputObjectSchema as FollowUncheckedUpdateWithoutFollowerInputObjectSchema } from './FollowUncheckedUpdateWithoutFollowerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FollowWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => FollowUpdateWithoutFollowerInputObjectSchema), z.lazy(() => FollowUncheckedUpdateWithoutFollowerInputObjectSchema)])
}).strict();
export const FollowUpdateWithWhereUniqueWithoutFollowerInputObjectSchema: z.ZodType<Prisma.FollowUpdateWithWhereUniqueWithoutFollowerInput> = makeSchema() as unknown as z.ZodType<Prisma.FollowUpdateWithWhereUniqueWithoutFollowerInput>;
export const FollowUpdateWithWhereUniqueWithoutFollowerInputObjectZodSchema = makeSchema();
