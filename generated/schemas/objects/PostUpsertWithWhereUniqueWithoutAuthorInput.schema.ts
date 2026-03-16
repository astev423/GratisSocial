import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PostWhereUniqueInputObjectSchema as PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema';
import { PostUpdateWithoutAuthorInputObjectSchema as PostUpdateWithoutAuthorInputObjectSchema } from './PostUpdateWithoutAuthorInput.schema';
import { PostUncheckedUpdateWithoutAuthorInputObjectSchema as PostUncheckedUpdateWithoutAuthorInputObjectSchema } from './PostUncheckedUpdateWithoutAuthorInput.schema';
import { PostCreateWithoutAuthorInputObjectSchema as PostCreateWithoutAuthorInputObjectSchema } from './PostCreateWithoutAuthorInput.schema';
import { PostUncheckedCreateWithoutAuthorInputObjectSchema as PostUncheckedCreateWithoutAuthorInputObjectSchema } from './PostUncheckedCreateWithoutAuthorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PostWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => PostUpdateWithoutAuthorInputObjectSchema), z.lazy(() => PostUncheckedUpdateWithoutAuthorInputObjectSchema)]),
  create: z.union([z.lazy(() => PostCreateWithoutAuthorInputObjectSchema), z.lazy(() => PostUncheckedCreateWithoutAuthorInputObjectSchema)])
}).strict();
export const PostUpsertWithWhereUniqueWithoutAuthorInputObjectSchema: z.ZodType<Prisma.PostUpsertWithWhereUniqueWithoutAuthorInput> = makeSchema() as unknown as z.ZodType<Prisma.PostUpsertWithWhereUniqueWithoutAuthorInput>;
export const PostUpsertWithWhereUniqueWithoutAuthorInputObjectZodSchema = makeSchema();
