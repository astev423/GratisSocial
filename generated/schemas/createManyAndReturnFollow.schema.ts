import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { FollowSelectObjectSchema as FollowSelectObjectSchema } from './objects/FollowSelect.schema';
import { FollowCreateManyInputObjectSchema as FollowCreateManyInputObjectSchema } from './objects/FollowCreateManyInput.schema';

export const FollowCreateManyAndReturnSchema: z.ZodType<Prisma.FollowCreateManyAndReturnArgs> = z.object({ select: FollowSelectObjectSchema.optional(), data: z.union([ FollowCreateManyInputObjectSchema, z.array(FollowCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.FollowCreateManyAndReturnArgs>;

export const FollowCreateManyAndReturnZodSchema = z.object({ select: FollowSelectObjectSchema.optional(), data: z.union([ FollowCreateManyInputObjectSchema, z.array(FollowCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();