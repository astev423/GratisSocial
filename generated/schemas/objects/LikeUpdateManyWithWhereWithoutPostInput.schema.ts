import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LikeScalarWhereInputObjectSchema as LikeScalarWhereInputObjectSchema } from './LikeScalarWhereInput.schema';
import { LikeUpdateManyMutationInputObjectSchema as LikeUpdateManyMutationInputObjectSchema } from './LikeUpdateManyMutationInput.schema';
import { LikeUncheckedUpdateManyWithoutPostInputObjectSchema as LikeUncheckedUpdateManyWithoutPostInputObjectSchema } from './LikeUncheckedUpdateManyWithoutPostInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LikeScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => LikeUpdateManyMutationInputObjectSchema), z.lazy(() => LikeUncheckedUpdateManyWithoutPostInputObjectSchema)])
}).strict();
export const LikeUpdateManyWithWhereWithoutPostInputObjectSchema: z.ZodType<Prisma.LikeUpdateManyWithWhereWithoutPostInput> = makeSchema() as unknown as z.ZodType<Prisma.LikeUpdateManyWithWhereWithoutPostInput>;
export const LikeUpdateManyWithWhereWithoutPostInputObjectZodSchema = makeSchema();
