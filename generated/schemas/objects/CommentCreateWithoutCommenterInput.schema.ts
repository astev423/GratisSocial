import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PostCreateNestedOneWithoutCommentsInputObjectSchema as PostCreateNestedOneWithoutCommentsInputObjectSchema } from './PostCreateNestedOneWithoutCommentsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  content: z.string(),
  post: z.lazy(() => PostCreateNestedOneWithoutCommentsInputObjectSchema)
}).strict();
export const CommentCreateWithoutCommenterInputObjectSchema: z.ZodType<Prisma.CommentCreateWithoutCommenterInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentCreateWithoutCommenterInput>;
export const CommentCreateWithoutCommenterInputObjectZodSchema = makeSchema();
