import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PostWhereUniqueInputObjectSchema as PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema';
import { PostCreateWithoutAuthorUsernameInputObjectSchema as PostCreateWithoutAuthorUsernameInputObjectSchema } from './PostCreateWithoutAuthorUsernameInput.schema';
import { PostUncheckedCreateWithoutAuthorUsernameInputObjectSchema as PostUncheckedCreateWithoutAuthorUsernameInputObjectSchema } from './PostUncheckedCreateWithoutAuthorUsernameInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PostWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PostCreateWithoutAuthorUsernameInputObjectSchema), z.lazy(() => PostUncheckedCreateWithoutAuthorUsernameInputObjectSchema)])
}).strict();
export const PostCreateOrConnectWithoutAuthorUsernameInputObjectSchema: z.ZodType<Prisma.PostCreateOrConnectWithoutAuthorUsernameInput> = makeSchema() as unknown as z.ZodType<Prisma.PostCreateOrConnectWithoutAuthorUsernameInput>;
export const PostCreateOrConnectWithoutAuthorUsernameInputObjectZodSchema = makeSchema();
