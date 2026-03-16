import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { FollowCreateManyInputObjectSchema as FollowCreateManyInputObjectSchema } from './objects/FollowCreateManyInput.schema';

export const FollowCreateManySchema: z.ZodType<Prisma.FollowCreateManyArgs> = z.object({ data: z.union([ FollowCreateManyInputObjectSchema, z.array(FollowCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.FollowCreateManyArgs>;

export const FollowCreateManyZodSchema = z.object({ data: z.union([ FollowCreateManyInputObjectSchema, z.array(FollowCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();