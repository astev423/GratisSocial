import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PostUpdateWithoutLikesInputObjectSchema as PostUpdateWithoutLikesInputObjectSchema } from './PostUpdateWithoutLikesInput.schema';
import { PostUncheckedUpdateWithoutLikesInputObjectSchema as PostUncheckedUpdateWithoutLikesInputObjectSchema } from './PostUncheckedUpdateWithoutLikesInput.schema';
import { PostCreateWithoutLikesInputObjectSchema as PostCreateWithoutLikesInputObjectSchema } from './PostCreateWithoutLikesInput.schema';
import { PostUncheckedCreateWithoutLikesInputObjectSchema as PostUncheckedCreateWithoutLikesInputObjectSchema } from './PostUncheckedCreateWithoutLikesInput.schema';
import { PostWhereInputObjectSchema as PostWhereInputObjectSchema } from './PostWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => PostUpdateWithoutLikesInputObjectSchema), z.lazy(() => PostUncheckedUpdateWithoutLikesInputObjectSchema)]),
  create: z.union([z.lazy(() => PostCreateWithoutLikesInputObjectSchema), z.lazy(() => PostUncheckedCreateWithoutLikesInputObjectSchema)]),
  where: z.lazy(() => PostWhereInputObjectSchema).optional()
}).strict();
export const PostUpsertWithoutLikesInputObjectSchema: z.ZodType<Prisma.PostUpsertWithoutLikesInput> = makeSchema() as unknown as z.ZodType<Prisma.PostUpsertWithoutLikesInput>;
export const PostUpsertWithoutLikesInputObjectZodSchema = makeSchema();
