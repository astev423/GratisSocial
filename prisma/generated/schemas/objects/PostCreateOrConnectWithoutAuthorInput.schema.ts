import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PostWhereUniqueInputObjectSchema as PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema';
import { PostCreateWithoutAuthorInputObjectSchema as PostCreateWithoutAuthorInputObjectSchema } from './PostCreateWithoutAuthorInput.schema';
import { PostUncheckedCreateWithoutAuthorInputObjectSchema as PostUncheckedCreateWithoutAuthorInputObjectSchema } from './PostUncheckedCreateWithoutAuthorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PostWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PostCreateWithoutAuthorInputObjectSchema), z.lazy(() => PostUncheckedCreateWithoutAuthorInputObjectSchema)])
}).strict();
export const PostCreateOrConnectWithoutAuthorInputObjectSchema: z.ZodType<Prisma.PostCreateOrConnectWithoutAuthorInput> = makeSchema() as unknown as z.ZodType<Prisma.PostCreateOrConnectWithoutAuthorInput>;
export const PostCreateOrConnectWithoutAuthorInputObjectZodSchema = makeSchema();
