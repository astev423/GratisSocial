import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PostWhereInputObjectSchema as PostWhereInputObjectSchema } from './PostWhereInput.schema';
import { PostUpdateWithoutLikesInputObjectSchema as PostUpdateWithoutLikesInputObjectSchema } from './PostUpdateWithoutLikesInput.schema';
import { PostUncheckedUpdateWithoutLikesInputObjectSchema as PostUncheckedUpdateWithoutLikesInputObjectSchema } from './PostUncheckedUpdateWithoutLikesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PostWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => PostUpdateWithoutLikesInputObjectSchema), z.lazy(() => PostUncheckedUpdateWithoutLikesInputObjectSchema)])
}).strict();
export const PostUpdateToOneWithWhereWithoutLikesInputObjectSchema: z.ZodType<Prisma.PostUpdateToOneWithWhereWithoutLikesInput> = makeSchema() as unknown as z.ZodType<Prisma.PostUpdateToOneWithWhereWithoutLikesInput>;
export const PostUpdateToOneWithWhereWithoutLikesInputObjectZodSchema = makeSchema();
