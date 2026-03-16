import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  followerId: z.string()
}).strict();
export const FollowUncheckedCreateWithoutPersonFollowedInputObjectSchema: z.ZodType<Prisma.FollowUncheckedCreateWithoutPersonFollowedInput> = makeSchema() as unknown as z.ZodType<Prisma.FollowUncheckedCreateWithoutPersonFollowedInput>;
export const FollowUncheckedCreateWithoutPersonFollowedInputObjectZodSchema = makeSchema();
