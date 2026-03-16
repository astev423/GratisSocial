import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { PostOrderByWithRelationInputObjectSchema as PostOrderByWithRelationInputObjectSchema } from './PostOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  content: SortOrderSchema.optional(),
  commenterUsername: SortOrderSchema.optional(),
  postId: SortOrderSchema.optional(),
  commenter: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  post: z.lazy(() => PostOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const CommentOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.CommentOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentOrderByWithRelationInput>;
export const CommentOrderByWithRelationInputObjectZodSchema = makeSchema();
