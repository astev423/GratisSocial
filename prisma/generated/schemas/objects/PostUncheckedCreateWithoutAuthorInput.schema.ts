import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CommentUncheckedCreateNestedManyWithoutPostInputObjectSchema as CommentUncheckedCreateNestedManyWithoutPostInputObjectSchema } from './CommentUncheckedCreateNestedManyWithoutPostInput.schema';
import { LikeUncheckedCreateNestedManyWithoutPostInputObjectSchema as LikeUncheckedCreateNestedManyWithoutPostInputObjectSchema } from './LikeUncheckedCreateNestedManyWithoutPostInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  title: z.string(),
  content: z.string(),
  createdAt: z.coerce.date().optional(),
  posterUsername: z.string(),
  commentCount: z.number().int().optional(),
  likeCount: z.number().int().optional(),
  comments: z.lazy(() => CommentUncheckedCreateNestedManyWithoutPostInputObjectSchema).optional(),
  likes: z.lazy(() => LikeUncheckedCreateNestedManyWithoutPostInputObjectSchema).optional()
}).strict();
export const PostUncheckedCreateWithoutAuthorInputObjectSchema: z.ZodType<Prisma.PostUncheckedCreateWithoutAuthorInput> = makeSchema() as unknown as z.ZodType<Prisma.PostUncheckedCreateWithoutAuthorInput>;
export const PostUncheckedCreateWithoutAuthorInputObjectZodSchema = makeSchema();
