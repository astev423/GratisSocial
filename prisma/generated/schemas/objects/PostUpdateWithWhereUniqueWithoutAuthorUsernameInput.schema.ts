import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PostWhereUniqueInputObjectSchema as PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema';
import { PostUpdateWithoutAuthorUsernameInputObjectSchema as PostUpdateWithoutAuthorUsernameInputObjectSchema } from './PostUpdateWithoutAuthorUsernameInput.schema';
import { PostUncheckedUpdateWithoutAuthorUsernameInputObjectSchema as PostUncheckedUpdateWithoutAuthorUsernameInputObjectSchema } from './PostUncheckedUpdateWithoutAuthorUsernameInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PostWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => PostUpdateWithoutAuthorUsernameInputObjectSchema), z.lazy(() => PostUncheckedUpdateWithoutAuthorUsernameInputObjectSchema)])
}).strict();
export const PostUpdateWithWhereUniqueWithoutAuthorUsernameInputObjectSchema: z.ZodType<Prisma.PostUpdateWithWhereUniqueWithoutAuthorUsernameInput> = makeSchema() as unknown as z.ZodType<Prisma.PostUpdateWithWhereUniqueWithoutAuthorUsernameInput>;
export const PostUpdateWithWhereUniqueWithoutAuthorUsernameInputObjectZodSchema = makeSchema();
