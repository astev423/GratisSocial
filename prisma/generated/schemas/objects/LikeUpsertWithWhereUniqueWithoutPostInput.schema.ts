import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LikeWhereUniqueInputObjectSchema as LikeWhereUniqueInputObjectSchema } from './LikeWhereUniqueInput.schema';
import { LikeUpdateWithoutPostInputObjectSchema as LikeUpdateWithoutPostInputObjectSchema } from './LikeUpdateWithoutPostInput.schema';
import { LikeUncheckedUpdateWithoutPostInputObjectSchema as LikeUncheckedUpdateWithoutPostInputObjectSchema } from './LikeUncheckedUpdateWithoutPostInput.schema';
import { LikeCreateWithoutPostInputObjectSchema as LikeCreateWithoutPostInputObjectSchema } from './LikeCreateWithoutPostInput.schema';
import { LikeUncheckedCreateWithoutPostInputObjectSchema as LikeUncheckedCreateWithoutPostInputObjectSchema } from './LikeUncheckedCreateWithoutPostInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LikeWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => LikeUpdateWithoutPostInputObjectSchema), z.lazy(() => LikeUncheckedUpdateWithoutPostInputObjectSchema)]),
  create: z.union([z.lazy(() => LikeCreateWithoutPostInputObjectSchema), z.lazy(() => LikeUncheckedCreateWithoutPostInputObjectSchema)])
}).strict();
export const LikeUpsertWithWhereUniqueWithoutPostInputObjectSchema: z.ZodType<Prisma.LikeUpsertWithWhereUniqueWithoutPostInput> = makeSchema() as unknown as z.ZodType<Prisma.LikeUpsertWithWhereUniqueWithoutPostInput>;
export const LikeUpsertWithWhereUniqueWithoutPostInputObjectZodSchema = makeSchema();
