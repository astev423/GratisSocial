import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateNestedOneWithoutCommentsInputObjectSchema as UserCreateNestedOneWithoutCommentsInputObjectSchema } from './UserCreateNestedOneWithoutCommentsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  content: z.string(),
  commenter: z.lazy(() => UserCreateNestedOneWithoutCommentsInputObjectSchema)
}).strict();
export const CommentCreateWithoutPostInputObjectSchema: z.ZodType<Prisma.CommentCreateWithoutPostInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentCreateWithoutPostInput>;
export const CommentCreateWithoutPostInputObjectZodSchema = makeSchema();
