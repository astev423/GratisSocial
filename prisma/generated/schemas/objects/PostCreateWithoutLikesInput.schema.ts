import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateNestedOneWithoutPostsByIdInputObjectSchema as UserCreateNestedOneWithoutPostsByIdInputObjectSchema } from './UserCreateNestedOneWithoutPostsByIdInput.schema';
import { UserCreateNestedOneWithoutPostsByUsernameInputObjectSchema as UserCreateNestedOneWithoutPostsByUsernameInputObjectSchema } from './UserCreateNestedOneWithoutPostsByUsernameInput.schema';
import { CommentCreateNestedManyWithoutPostInputObjectSchema as CommentCreateNestedManyWithoutPostInputObjectSchema } from './CommentCreateNestedManyWithoutPostInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  title: z.string(),
  content: z.string(),
  createdAt: z.coerce.date().optional(),
  commentCount: z.number().int().optional(),
  likeCount: z.number().int().optional(),
  author: z.lazy(() => UserCreateNestedOneWithoutPostsByIdInputObjectSchema),
  authorUsername: z.lazy(() => UserCreateNestedOneWithoutPostsByUsernameInputObjectSchema),
  comments: z.lazy(() => CommentCreateNestedManyWithoutPostInputObjectSchema).optional()
}).strict();
export const PostCreateWithoutLikesInputObjectSchema: z.ZodType<Prisma.PostCreateWithoutLikesInput> = makeSchema() as unknown as z.ZodType<Prisma.PostCreateWithoutLikesInput>;
export const PostCreateWithoutLikesInputObjectZodSchema = makeSchema();
