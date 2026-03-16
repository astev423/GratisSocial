import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  followerId: SortOrderSchema.optional(),
  personFollowedId: SortOrderSchema.optional(),
  follower: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  personFollowed: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const FollowOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.FollowOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.FollowOrderByWithRelationInput>;
export const FollowOrderByWithRelationInputObjectZodSchema = makeSchema();
