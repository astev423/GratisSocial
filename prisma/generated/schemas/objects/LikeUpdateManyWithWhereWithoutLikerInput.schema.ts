import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LikeScalarWhereInputObjectSchema as LikeScalarWhereInputObjectSchema } from './LikeScalarWhereInput.schema';
import { LikeUpdateManyMutationInputObjectSchema as LikeUpdateManyMutationInputObjectSchema } from './LikeUpdateManyMutationInput.schema';
import { LikeUncheckedUpdateManyWithoutLikerInputObjectSchema as LikeUncheckedUpdateManyWithoutLikerInputObjectSchema } from './LikeUncheckedUpdateManyWithoutLikerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LikeScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => LikeUpdateManyMutationInputObjectSchema), z.lazy(() => LikeUncheckedUpdateManyWithoutLikerInputObjectSchema)])
}).strict();
export const LikeUpdateManyWithWhereWithoutLikerInputObjectSchema: z.ZodType<Prisma.LikeUpdateManyWithWhereWithoutLikerInput> = makeSchema() as unknown as z.ZodType<Prisma.LikeUpdateManyWithWhereWithoutLikerInput>;
export const LikeUpdateManyWithWhereWithoutLikerInputObjectZodSchema = makeSchema();
