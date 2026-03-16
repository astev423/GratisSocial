import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PostCreateWithoutLikesInputObjectSchema as PostCreateWithoutLikesInputObjectSchema } from './PostCreateWithoutLikesInput.schema';
import { PostUncheckedCreateWithoutLikesInputObjectSchema as PostUncheckedCreateWithoutLikesInputObjectSchema } from './PostUncheckedCreateWithoutLikesInput.schema';
import { PostCreateOrConnectWithoutLikesInputObjectSchema as PostCreateOrConnectWithoutLikesInputObjectSchema } from './PostCreateOrConnectWithoutLikesInput.schema';
import { PostWhereUniqueInputObjectSchema as PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PostCreateWithoutLikesInputObjectSchema), z.lazy(() => PostUncheckedCreateWithoutLikesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PostCreateOrConnectWithoutLikesInputObjectSchema).optional(),
  connect: z.lazy(() => PostWhereUniqueInputObjectSchema).optional()
}).strict();
export const PostCreateNestedOneWithoutLikesInputObjectSchema: z.ZodType<Prisma.PostCreateNestedOneWithoutLikesInput> = makeSchema() as unknown as z.ZodType<Prisma.PostCreateNestedOneWithoutLikesInput>;
export const PostCreateNestedOneWithoutLikesInputObjectZodSchema = makeSchema();
