import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PostWhereUniqueInputObjectSchema as PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema';
import { PostUpdateWithoutAuthorUsernameInputObjectSchema as PostUpdateWithoutAuthorUsernameInputObjectSchema } from './PostUpdateWithoutAuthorUsernameInput.schema';
import { PostUncheckedUpdateWithoutAuthorUsernameInputObjectSchema as PostUncheckedUpdateWithoutAuthorUsernameInputObjectSchema } from './PostUncheckedUpdateWithoutAuthorUsernameInput.schema';
import { PostCreateWithoutAuthorUsernameInputObjectSchema as PostCreateWithoutAuthorUsernameInputObjectSchema } from './PostCreateWithoutAuthorUsernameInput.schema';
import { PostUncheckedCreateWithoutAuthorUsernameInputObjectSchema as PostUncheckedCreateWithoutAuthorUsernameInputObjectSchema } from './PostUncheckedCreateWithoutAuthorUsernameInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PostWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => PostUpdateWithoutAuthorUsernameInputObjectSchema), z.lazy(() => PostUncheckedUpdateWithoutAuthorUsernameInputObjectSchema)]),
  create: z.union([z.lazy(() => PostCreateWithoutAuthorUsernameInputObjectSchema), z.lazy(() => PostUncheckedCreateWithoutAuthorUsernameInputObjectSchema)])
}).strict();
export const PostUpsertWithWhereUniqueWithoutAuthorUsernameInputObjectSchema: z.ZodType<Prisma.PostUpsertWithWhereUniqueWithoutAuthorUsernameInput> = makeSchema() as unknown as z.ZodType<Prisma.PostUpsertWithWhereUniqueWithoutAuthorUsernameInput>;
export const PostUpsertWithWhereUniqueWithoutAuthorUsernameInputObjectZodSchema = makeSchema();
