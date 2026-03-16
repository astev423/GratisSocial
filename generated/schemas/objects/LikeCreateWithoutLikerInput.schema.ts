import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PostCreateNestedOneWithoutLikesInputObjectSchema as PostCreateNestedOneWithoutLikesInputObjectSchema } from './PostCreateNestedOneWithoutLikesInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  liked: z.boolean(),
  post: z.lazy(() => PostCreateNestedOneWithoutLikesInputObjectSchema)
}).strict();
export const LikeCreateWithoutLikerInputObjectSchema: z.ZodType<Prisma.LikeCreateWithoutLikerInput> = makeSchema() as unknown as z.ZodType<Prisma.LikeCreateWithoutLikerInput>;
export const LikeCreateWithoutLikerInputObjectZodSchema = makeSchema();
