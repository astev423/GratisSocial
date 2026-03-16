import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FollowScalarWhereInputObjectSchema as FollowScalarWhereInputObjectSchema } from './FollowScalarWhereInput.schema';
import { FollowUpdateManyMutationInputObjectSchema as FollowUpdateManyMutationInputObjectSchema } from './FollowUpdateManyMutationInput.schema';
import { FollowUncheckedUpdateManyWithoutPersonFollowedInputObjectSchema as FollowUncheckedUpdateManyWithoutPersonFollowedInputObjectSchema } from './FollowUncheckedUpdateManyWithoutPersonFollowedInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FollowScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => FollowUpdateManyMutationInputObjectSchema), z.lazy(() => FollowUncheckedUpdateManyWithoutPersonFollowedInputObjectSchema)])
}).strict();
export const FollowUpdateManyWithWhereWithoutPersonFollowedInputObjectSchema: z.ZodType<Prisma.FollowUpdateManyWithWhereWithoutPersonFollowedInput> = makeSchema() as unknown as z.ZodType<Prisma.FollowUpdateManyWithWhereWithoutPersonFollowedInput>;
export const FollowUpdateManyWithWhereWithoutPersonFollowedInputObjectZodSchema = makeSchema();
