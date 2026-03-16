import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { PostScalarRelationFilterObjectSchema as PostScalarRelationFilterObjectSchema } from './PostScalarRelationFilter.schema';
import { PostWhereInputObjectSchema as PostWhereInputObjectSchema } from './PostWhereInput.schema'

const commentwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => CommentWhereInputObjectSchema), z.lazy(() => CommentWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CommentWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CommentWhereInputObjectSchema), z.lazy(() => CommentWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  content: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  commenterUsername: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  postId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  commenter: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  post: z.union([z.lazy(() => PostScalarRelationFilterObjectSchema), z.lazy(() => PostWhereInputObjectSchema)]).optional()
}).strict();
export const CommentWhereInputObjectSchema: z.ZodType<Prisma.CommentWhereInput> = commentwhereinputSchema as unknown as z.ZodType<Prisma.CommentWhereInput>;
export const CommentWhereInputObjectZodSchema = commentwhereinputSchema;
