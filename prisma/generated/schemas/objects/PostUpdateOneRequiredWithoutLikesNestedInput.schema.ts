import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PostCreateWithoutLikesInputObjectSchema as PostCreateWithoutLikesInputObjectSchema } from './PostCreateWithoutLikesInput.schema';
import { PostUncheckedCreateWithoutLikesInputObjectSchema as PostUncheckedCreateWithoutLikesInputObjectSchema } from './PostUncheckedCreateWithoutLikesInput.schema';
import { PostCreateOrConnectWithoutLikesInputObjectSchema as PostCreateOrConnectWithoutLikesInputObjectSchema } from './PostCreateOrConnectWithoutLikesInput.schema';
import { PostUpsertWithoutLikesInputObjectSchema as PostUpsertWithoutLikesInputObjectSchema } from './PostUpsertWithoutLikesInput.schema';
import { PostWhereUniqueInputObjectSchema as PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema';
import { PostUpdateToOneWithWhereWithoutLikesInputObjectSchema as PostUpdateToOneWithWhereWithoutLikesInputObjectSchema } from './PostUpdateToOneWithWhereWithoutLikesInput.schema';
import { PostUpdateWithoutLikesInputObjectSchema as PostUpdateWithoutLikesInputObjectSchema } from './PostUpdateWithoutLikesInput.schema';
import { PostUncheckedUpdateWithoutLikesInputObjectSchema as PostUncheckedUpdateWithoutLikesInputObjectSchema } from './PostUncheckedUpdateWithoutLikesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PostCreateWithoutLikesInputObjectSchema), z.lazy(() => PostUncheckedCreateWithoutLikesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PostCreateOrConnectWithoutLikesInputObjectSchema).optional(),
  upsert: z.lazy(() => PostUpsertWithoutLikesInputObjectSchema).optional(),
  connect: z.lazy(() => PostWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => PostUpdateToOneWithWhereWithoutLikesInputObjectSchema), z.lazy(() => PostUpdateWithoutLikesInputObjectSchema), z.lazy(() => PostUncheckedUpdateWithoutLikesInputObjectSchema)]).optional()
}).strict();
export const PostUpdateOneRequiredWithoutLikesNestedInputObjectSchema: z.ZodType<Prisma.PostUpdateOneRequiredWithoutLikesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PostUpdateOneRequiredWithoutLikesNestedInput>;
export const PostUpdateOneRequiredWithoutLikesNestedInputObjectZodSchema = makeSchema();
