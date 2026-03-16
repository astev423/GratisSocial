import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CommentUncheckedCreateNestedManyWithoutPostInputObjectSchema as CommentUncheckedCreateNestedManyWithoutPostInputObjectSchema } from './CommentUncheckedCreateNestedManyWithoutPostInput.schema';
import { LikeUncheckedCreateNestedManyWithoutPostInputObjectSchema as LikeUncheckedCreateNestedManyWithoutPostInputObjectSchema } from './LikeUncheckedCreateNestedManyWithoutPostInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  title: z.string(),
  content: z.string(),
  createdAt: z.coerce.date().optional(),
  authorId: z.string(),
  commentCount: z.number().int().optional(),
  likeCount: z.number().int().optional(),
  comments: z.lazy(() => CommentUncheckedCreateNestedManyWithoutPostInputObjectSchema).optional(),
  likes: z.lazy(() => LikeUncheckedCreateNestedManyWithoutPostInputObjectSchema).optional()
}).strict();
export const PostUncheckedCreateWithoutAuthorUsernameInputObjectSchema: z.ZodType<Prisma.PostUncheckedCreateWithoutAuthorUsernameInput> = makeSchema() as unknown as z.ZodType<Prisma.PostUncheckedCreateWithoutAuthorUsernameInput>;
export const PostUncheckedCreateWithoutAuthorUsernameInputObjectZodSchema = makeSchema();
