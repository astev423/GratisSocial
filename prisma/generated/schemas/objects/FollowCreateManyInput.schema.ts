import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  followerId: z.string(),
  personFollowedId: z.string()
}).strict();
export const FollowCreateManyInputObjectSchema: z.ZodType<Prisma.FollowCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.FollowCreateManyInput>;
export const FollowCreateManyInputObjectZodSchema = makeSchema();
