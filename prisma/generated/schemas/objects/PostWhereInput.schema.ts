import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { CommentListRelationFilterObjectSchema as CommentListRelationFilterObjectSchema } from './CommentListRelationFilter.schema';
import { LikeListRelationFilterObjectSchema as LikeListRelationFilterObjectSchema } from './LikeListRelationFilter.schema'

const postwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => PostWhereInputObjectSchema), z.lazy(() => PostWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PostWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PostWhereInputObjectSchema), z.lazy(() => PostWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  title: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  content: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  authorId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  posterUsername: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  commentCount: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  likeCount: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  author: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  authorUsername: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  comments: z.lazy(() => CommentListRelationFilterObjectSchema).optional(),
  likes: z.lazy(() => LikeListRelationFilterObjectSchema).optional()
}).strict();
export const PostWhereInputObjectSchema: z.ZodType<Prisma.PostWhereInput> = postwhereinputSchema as unknown as z.ZodType<Prisma.PostWhereInput>;
export const PostWhereInputObjectZodSchema = postwhereinputSchema;
