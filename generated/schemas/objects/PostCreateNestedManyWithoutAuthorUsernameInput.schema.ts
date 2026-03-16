import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PostCreateWithoutAuthorUsernameInputObjectSchema as PostCreateWithoutAuthorUsernameInputObjectSchema } from './PostCreateWithoutAuthorUsernameInput.schema';
import { PostUncheckedCreateWithoutAuthorUsernameInputObjectSchema as PostUncheckedCreateWithoutAuthorUsernameInputObjectSchema } from './PostUncheckedCreateWithoutAuthorUsernameInput.schema';
import { PostCreateOrConnectWithoutAuthorUsernameInputObjectSchema as PostCreateOrConnectWithoutAuthorUsernameInputObjectSchema } from './PostCreateOrConnectWithoutAuthorUsernameInput.schema';
import { PostCreateManyAuthorUsernameInputEnvelopeObjectSchema as PostCreateManyAuthorUsernameInputEnvelopeObjectSchema } from './PostCreateManyAuthorUsernameInputEnvelope.schema';
import { PostWhereUniqueInputObjectSchema as PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PostCreateWithoutAuthorUsernameInputObjectSchema), z.lazy(() => PostCreateWithoutAuthorUsernameInputObjectSchema).array(), z.lazy(() => PostUncheckedCreateWithoutAuthorUsernameInputObjectSchema), z.lazy(() => PostUncheckedCreateWithoutAuthorUsernameInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PostCreateOrConnectWithoutAuthorUsernameInputObjectSchema), z.lazy(() => PostCreateOrConnectWithoutAuthorUsernameInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PostCreateManyAuthorUsernameInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => PostWhereUniqueInputObjectSchema), z.lazy(() => PostWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const PostCreateNestedManyWithoutAuthorUsernameInputObjectSchema: z.ZodType<Prisma.PostCreateNestedManyWithoutAuthorUsernameInput> = makeSchema() as unknown as z.ZodType<Prisma.PostCreateNestedManyWithoutAuthorUsernameInput>;
export const PostCreateNestedManyWithoutAuthorUsernameInputObjectZodSchema = makeSchema();
