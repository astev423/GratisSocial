import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateNestedOneWithoutLikesInputObjectSchema as UserCreateNestedOneWithoutLikesInputObjectSchema } from './UserCreateNestedOneWithoutLikesInput.schema';
import { PostCreateNestedOneWithoutLikesInputObjectSchema as PostCreateNestedOneWithoutLikesInputObjectSchema } from './PostCreateNestedOneWithoutLikesInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  liked: z.boolean(),
  liker: z.lazy(() => UserCreateNestedOneWithoutLikesInputObjectSchema),
  post: z.lazy(() => PostCreateNestedOneWithoutLikesInputObjectSchema)
}).strict();
export const LikeCreateInputObjectSchema: z.ZodType<Prisma.LikeCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.LikeCreateInput>;
export const LikeCreateInputObjectZodSchema = makeSchema();
