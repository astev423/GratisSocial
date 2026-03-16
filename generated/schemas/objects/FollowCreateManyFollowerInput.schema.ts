import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  personFollowedId: z.string()
}).strict();
export const FollowCreateManyFollowerInputObjectSchema: z.ZodType<Prisma.FollowCreateManyFollowerInput> = makeSchema() as unknown as z.ZodType<Prisma.FollowCreateManyFollowerInput>;
export const FollowCreateManyFollowerInputObjectZodSchema = makeSchema();
