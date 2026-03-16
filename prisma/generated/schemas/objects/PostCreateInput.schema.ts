import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateNestedOneWithoutPostsByIdInputObjectSchema as UserCreateNestedOneWithoutPostsByIdInputObjectSchema } from './UserCreateNestedOneWithoutPostsByIdInput.schema';
import { UserCreateNestedOneWithoutPostsByUsernameInputObjectSchema as UserCreateNestedOneWithoutPostsByUsernameInputObjectSchema } from './UserCreateNestedOneWithoutPostsByUsernameInput.schema';
import { CommentCreateNestedManyWithoutPostInputObjectSchema as CommentCreateNestedManyWithoutPostInputObjectSchema } from './CommentCreateNestedManyWithoutPostInput.schema';
import { LikeCreateNestedManyWithoutPostInputObjectSchema as LikeCreateNestedManyWithoutPostInputObjectSchema } from './LikeCreateNestedManyWithoutPostInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  title: z.string(),
  content: z.string(),
  createdAt: z.coerce.date().optional(),
  commentCount: z.number().int().optional(),
  likeCount: z.number().int().optional(),
  author: z.lazy(() => UserCreateNestedOneWithoutPostsByIdInputObjectSchema),
  authorUsername: z.lazy(() => UserCreateNestedOneWithoutPostsByUsernameInputObjectSchema),
  comments: z.lazy(() => CommentCreateNestedManyWithoutPostInputObjectSchema).optional(),
  likes: z.lazy(() => LikeCreateNestedManyWithoutPostInputObjectSchema).optional()
}).strict();
export const PostCreateInputObjectSchema: z.ZodType<Prisma.PostCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.PostCreateInput>;
export const PostCreateInputObjectZodSchema = makeSchema();
