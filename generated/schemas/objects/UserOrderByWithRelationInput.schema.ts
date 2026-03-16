import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PostOrderByRelationAggregateInputObjectSchema as PostOrderByRelationAggregateInputObjectSchema } from './PostOrderByRelationAggregateInput.schema';
import { FollowOrderByRelationAggregateInputObjectSchema as FollowOrderByRelationAggregateInputObjectSchema } from './FollowOrderByRelationAggregateInput.schema';
import { CommentOrderByRelationAggregateInputObjectSchema as CommentOrderByRelationAggregateInputObjectSchema } from './CommentOrderByRelationAggregateInput.schema';
import { LikeOrderByRelationAggregateInputObjectSchema as LikeOrderByRelationAggregateInputObjectSchema } from './LikeOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  username: SortOrderSchema.optional(),
  firstName: SortOrderSchema.optional(),
  lastName: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  followersCount: SortOrderSchema.optional(),
  followingCount: SortOrderSchema.optional(),
  postsById: z.lazy(() => PostOrderByRelationAggregateInputObjectSchema).optional(),
  postsByUsername: z.lazy(() => PostOrderByRelationAggregateInputObjectSchema).optional(),
  followers: z.lazy(() => FollowOrderByRelationAggregateInputObjectSchema).optional(),
  following: z.lazy(() => FollowOrderByRelationAggregateInputObjectSchema).optional(),
  comments: z.lazy(() => CommentOrderByRelationAggregateInputObjectSchema).optional(),
  likes: z.lazy(() => LikeOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const UserOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.UserOrderByWithRelationInput>;
export const UserOrderByWithRelationInputObjectZodSchema = makeSchema();
