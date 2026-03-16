import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LikeWhereUniqueInputObjectSchema as LikeWhereUniqueInputObjectSchema } from './LikeWhereUniqueInput.schema';
import { LikeCreateWithoutLikerInputObjectSchema as LikeCreateWithoutLikerInputObjectSchema } from './LikeCreateWithoutLikerInput.schema';
import { LikeUncheckedCreateWithoutLikerInputObjectSchema as LikeUncheckedCreateWithoutLikerInputObjectSchema } from './LikeUncheckedCreateWithoutLikerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LikeWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => LikeCreateWithoutLikerInputObjectSchema), z.lazy(() => LikeUncheckedCreateWithoutLikerInputObjectSchema)])
}).strict();
export const LikeCreateOrConnectWithoutLikerInputObjectSchema: z.ZodType<Prisma.LikeCreateOrConnectWithoutLikerInput> = makeSchema() as unknown as z.ZodType<Prisma.LikeCreateOrConnectWithoutLikerInput>;
export const LikeCreateOrConnectWithoutLikerInputObjectZodSchema = makeSchema();
