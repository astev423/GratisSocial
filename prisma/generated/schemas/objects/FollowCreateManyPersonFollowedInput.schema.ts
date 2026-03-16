import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  followerId: z.string()
}).strict();
export const FollowCreateManyPersonFollowedInputObjectSchema: z.ZodType<Prisma.FollowCreateManyPersonFollowedInput> = makeSchema() as unknown as z.ZodType<Prisma.FollowCreateManyPersonFollowedInput>;
export const FollowCreateManyPersonFollowedInputObjectZodSchema = makeSchema();
