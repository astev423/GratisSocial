import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const LikeWhereUniqueInputObjectSchema: z.ZodType<Prisma.LikeWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.LikeWhereUniqueInput>;
export const LikeWhereUniqueInputObjectZodSchema = makeSchema();
