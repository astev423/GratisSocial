import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateNestedOneWithoutCommentsInputObjectSchema as UserCreateNestedOneWithoutCommentsInputObjectSchema } from './UserCreateNestedOneWithoutCommentsInput.schema';
import { PostCreateNestedOneWithoutCommentsInputObjectSchema as PostCreateNestedOneWithoutCommentsInputObjectSchema } from './PostCreateNestedOneWithoutCommentsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  content: z.string(),
  commenter: z.lazy(() => UserCreateNestedOneWithoutCommentsInputObjectSchema),
  post: z.lazy(() => PostCreateNestedOneWithoutCommentsInputObjectSchema)
}).strict();
export const CommentCreateInputObjectSchema: z.ZodType<Prisma.CommentCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentCreateInput>;
export const CommentCreateInputObjectZodSchema = makeSchema();
