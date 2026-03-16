import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  followerId: z.string(),
  personFollowedId: z.string()
}).strict();
export const FollowUncheckedCreateInputObjectSchema: z.ZodType<Prisma.FollowUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.FollowUncheckedCreateInput>;
export const FollowUncheckedCreateInputObjectZodSchema = makeSchema();
