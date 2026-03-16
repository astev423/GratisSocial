import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { PostOrderByWithRelationInputObjectSchema as PostOrderByWithRelationInputObjectSchema } from './PostOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  liked: SortOrderSchema.optional(),
  likerId: SortOrderSchema.optional(),
  postId: SortOrderSchema.optional(),
  liker: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  post: z.lazy(() => PostOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const LikeOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.LikeOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.LikeOrderByWithRelationInput>;
export const LikeOrderByWithRelationInputObjectZodSchema = makeSchema();
