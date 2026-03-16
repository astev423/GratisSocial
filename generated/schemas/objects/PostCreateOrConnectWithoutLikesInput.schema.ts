import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PostWhereUniqueInputObjectSchema as PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema';
import { PostCreateWithoutLikesInputObjectSchema as PostCreateWithoutLikesInputObjectSchema } from './PostCreateWithoutLikesInput.schema';
import { PostUncheckedCreateWithoutLikesInputObjectSchema as PostUncheckedCreateWithoutLikesInputObjectSchema } from './PostUncheckedCreateWithoutLikesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PostWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PostCreateWithoutLikesInputObjectSchema), z.lazy(() => PostUncheckedCreateWithoutLikesInputObjectSchema)])
}).strict();
export const PostCreateOrConnectWithoutLikesInputObjectSchema: z.ZodType<Prisma.PostCreateOrConnectWithoutLikesInput> = makeSchema() as unknown as z.ZodType<Prisma.PostCreateOrConnectWithoutLikesInput>;
export const PostCreateOrConnectWithoutLikesInputObjectZodSchema = makeSchema();
