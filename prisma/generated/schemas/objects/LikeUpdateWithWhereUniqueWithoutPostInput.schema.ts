import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LikeWhereUniqueInputObjectSchema as LikeWhereUniqueInputObjectSchema } from './LikeWhereUniqueInput.schema';
import { LikeUpdateWithoutPostInputObjectSchema as LikeUpdateWithoutPostInputObjectSchema } from './LikeUpdateWithoutPostInput.schema';
import { LikeUncheckedUpdateWithoutPostInputObjectSchema as LikeUncheckedUpdateWithoutPostInputObjectSchema } from './LikeUncheckedUpdateWithoutPostInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LikeWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => LikeUpdateWithoutPostInputObjectSchema), z.lazy(() => LikeUncheckedUpdateWithoutPostInputObjectSchema)])
}).strict();
export const LikeUpdateWithWhereUniqueWithoutPostInputObjectSchema: z.ZodType<Prisma.LikeUpdateWithWhereUniqueWithoutPostInput> = makeSchema() as unknown as z.ZodType<Prisma.LikeUpdateWithWhereUniqueWithoutPostInput>;
export const LikeUpdateWithWhereUniqueWithoutPostInputObjectZodSchema = makeSchema();
