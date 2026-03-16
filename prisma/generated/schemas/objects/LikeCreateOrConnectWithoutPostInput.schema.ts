import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LikeWhereUniqueInputObjectSchema as LikeWhereUniqueInputObjectSchema } from './LikeWhereUniqueInput.schema';
import { LikeCreateWithoutPostInputObjectSchema as LikeCreateWithoutPostInputObjectSchema } from './LikeCreateWithoutPostInput.schema';
import { LikeUncheckedCreateWithoutPostInputObjectSchema as LikeUncheckedCreateWithoutPostInputObjectSchema } from './LikeUncheckedCreateWithoutPostInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LikeWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => LikeCreateWithoutPostInputObjectSchema), z.lazy(() => LikeUncheckedCreateWithoutPostInputObjectSchema)])
}).strict();
export const LikeCreateOrConnectWithoutPostInputObjectSchema: z.ZodType<Prisma.LikeCreateOrConnectWithoutPostInput> = makeSchema() as unknown as z.ZodType<Prisma.LikeCreateOrConnectWithoutPostInput>;
export const LikeCreateOrConnectWithoutPostInputObjectZodSchema = makeSchema();
