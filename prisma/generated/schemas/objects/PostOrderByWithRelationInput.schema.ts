import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { CommentOrderByRelationAggregateInputObjectSchema as CommentOrderByRelationAggregateInputObjectSchema } from './CommentOrderByRelationAggregateInput.schema';
import { LikeOrderByRelationAggregateInputObjectSchema as LikeOrderByRelationAggregateInputObjectSchema } from './LikeOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  content: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  authorId: SortOrderSchema.optional(),
  posterUsername: SortOrderSchema.optional(),
  commentCount: SortOrderSchema.optional(),
  likeCount: SortOrderSchema.optional(),
  author: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  authorUsername: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  comments: z.lazy(() => CommentOrderByRelationAggregateInputObjectSchema).optional(),
  likes: z.lazy(() => LikeOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const PostOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.PostOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.PostOrderByWithRelationInput>;
export const PostOrderByWithRelationInputObjectZodSchema = makeSchema();
