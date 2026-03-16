import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FollowScalarWhereInputObjectSchema as FollowScalarWhereInputObjectSchema } from './FollowScalarWhereInput.schema';
import { FollowUpdateManyMutationInputObjectSchema as FollowUpdateManyMutationInputObjectSchema } from './FollowUpdateManyMutationInput.schema';
import { FollowUncheckedUpdateManyWithoutFollowerInputObjectSchema as FollowUncheckedUpdateManyWithoutFollowerInputObjectSchema } from './FollowUncheckedUpdateManyWithoutFollowerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FollowScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => FollowUpdateManyMutationInputObjectSchema), z.lazy(() => FollowUncheckedUpdateManyWithoutFollowerInputObjectSchema)])
}).strict();
export const FollowUpdateManyWithWhereWithoutFollowerInputObjectSchema: z.ZodType<Prisma.FollowUpdateManyWithWhereWithoutFollowerInput> = makeSchema() as unknown as z.ZodType<Prisma.FollowUpdateManyWithWhereWithoutFollowerInput>;
export const FollowUpdateManyWithWhereWithoutFollowerInputObjectZodSchema = makeSchema();
