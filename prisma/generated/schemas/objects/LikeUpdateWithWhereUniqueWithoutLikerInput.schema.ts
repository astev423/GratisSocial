import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LikeWhereUniqueInputObjectSchema as LikeWhereUniqueInputObjectSchema } from './LikeWhereUniqueInput.schema';
import { LikeUpdateWithoutLikerInputObjectSchema as LikeUpdateWithoutLikerInputObjectSchema } from './LikeUpdateWithoutLikerInput.schema';
import { LikeUncheckedUpdateWithoutLikerInputObjectSchema as LikeUncheckedUpdateWithoutLikerInputObjectSchema } from './LikeUncheckedUpdateWithoutLikerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LikeWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => LikeUpdateWithoutLikerInputObjectSchema), z.lazy(() => LikeUncheckedUpdateWithoutLikerInputObjectSchema)])
}).strict();
export const LikeUpdateWithWhereUniqueWithoutLikerInputObjectSchema: z.ZodType<Prisma.LikeUpdateWithWhereUniqueWithoutLikerInput> = makeSchema() as unknown as z.ZodType<Prisma.LikeUpdateWithWhereUniqueWithoutLikerInput>;
export const LikeUpdateWithWhereUniqueWithoutLikerInputObjectZodSchema = makeSchema();
