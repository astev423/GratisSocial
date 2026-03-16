import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  personFollowedId: z.string()
}).strict();
export const FollowUncheckedCreateWithoutFollowerInputObjectSchema: z.ZodType<Prisma.FollowUncheckedCreateWithoutFollowerInput> = makeSchema() as unknown as z.ZodType<Prisma.FollowUncheckedCreateWithoutFollowerInput>;
export const FollowUncheckedCreateWithoutFollowerInputObjectZodSchema = makeSchema();
