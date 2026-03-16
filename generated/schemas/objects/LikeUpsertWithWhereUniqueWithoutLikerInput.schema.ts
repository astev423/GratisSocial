import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LikeWhereUniqueInputObjectSchema as LikeWhereUniqueInputObjectSchema } from './LikeWhereUniqueInput.schema';
import { LikeUpdateWithoutLikerInputObjectSchema as LikeUpdateWithoutLikerInputObjectSchema } from './LikeUpdateWithoutLikerInput.schema';
import { LikeUncheckedUpdateWithoutLikerInputObjectSchema as LikeUncheckedUpdateWithoutLikerInputObjectSchema } from './LikeUncheckedUpdateWithoutLikerInput.schema';
import { LikeCreateWithoutLikerInputObjectSchema as LikeCreateWithoutLikerInputObjectSchema } from './LikeCreateWithoutLikerInput.schema';
import { LikeUncheckedCreateWithoutLikerInputObjectSchema as LikeUncheckedCreateWithoutLikerInputObjectSchema } from './LikeUncheckedCreateWithoutLikerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LikeWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => LikeUpdateWithoutLikerInputObjectSchema), z.lazy(() => LikeUncheckedUpdateWithoutLikerInputObjectSchema)]),
  create: z.union([z.lazy(() => LikeCreateWithoutLikerInputObjectSchema), z.lazy(() => LikeUncheckedCreateWithoutLikerInputObjectSchema)])
}).strict();
export const LikeUpsertWithWhereUniqueWithoutLikerInputObjectSchema: z.ZodType<Prisma.LikeUpsertWithWhereUniqueWithoutLikerInput> = makeSchema() as unknown as z.ZodType<Prisma.LikeUpsertWithWhereUniqueWithoutLikerInput>;
export const LikeUpsertWithWhereUniqueWithoutLikerInputObjectZodSchema = makeSchema();
