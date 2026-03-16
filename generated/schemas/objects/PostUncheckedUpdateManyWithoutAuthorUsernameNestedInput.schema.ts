import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PostCreateWithoutAuthorUsernameInputObjectSchema as PostCreateWithoutAuthorUsernameInputObjectSchema } from './PostCreateWithoutAuthorUsernameInput.schema';
import { PostUncheckedCreateWithoutAuthorUsernameInputObjectSchema as PostUncheckedCreateWithoutAuthorUsernameInputObjectSchema } from './PostUncheckedCreateWithoutAuthorUsernameInput.schema';
import { PostCreateOrConnectWithoutAuthorUsernameInputObjectSchema as PostCreateOrConnectWithoutAuthorUsernameInputObjectSchema } from './PostCreateOrConnectWithoutAuthorUsernameInput.schema';
import { PostUpsertWithWhereUniqueWithoutAuthorUsernameInputObjectSchema as PostUpsertWithWhereUniqueWithoutAuthorUsernameInputObjectSchema } from './PostUpsertWithWhereUniqueWithoutAuthorUsernameInput.schema';
import { PostCreateManyAuthorUsernameInputEnvelopeObjectSchema as PostCreateManyAuthorUsernameInputEnvelopeObjectSchema } from './PostCreateManyAuthorUsernameInputEnvelope.schema';
import { PostWhereUniqueInputObjectSchema as PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema';
import { PostUpdateWithWhereUniqueWithoutAuthorUsernameInputObjectSchema as PostUpdateWithWhereUniqueWithoutAuthorUsernameInputObjectSchema } from './PostUpdateWithWhereUniqueWithoutAuthorUsernameInput.schema';
import { PostUpdateManyWithWhereWithoutAuthorUsernameInputObjectSchema as PostUpdateManyWithWhereWithoutAuthorUsernameInputObjectSchema } from './PostUpdateManyWithWhereWithoutAuthorUsernameInput.schema';
import { PostScalarWhereInputObjectSchema as PostScalarWhereInputObjectSchema } from './PostScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PostCreateWithoutAuthorUsernameInputObjectSchema), z.lazy(() => PostCreateWithoutAuthorUsernameInputObjectSchema).array(), z.lazy(() => PostUncheckedCreateWithoutAuthorUsernameInputObjectSchema), z.lazy(() => PostUncheckedCreateWithoutAuthorUsernameInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PostCreateOrConnectWithoutAuthorUsernameInputObjectSchema), z.lazy(() => PostCreateOrConnectWithoutAuthorUsernameInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => PostUpsertWithWhereUniqueWithoutAuthorUsernameInputObjectSchema), z.lazy(() => PostUpsertWithWhereUniqueWithoutAuthorUsernameInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PostCreateManyAuthorUsernameInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => PostWhereUniqueInputObjectSchema), z.lazy(() => PostWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => PostWhereUniqueInputObjectSchema), z.lazy(() => PostWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => PostWhereUniqueInputObjectSchema), z.lazy(() => PostWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => PostWhereUniqueInputObjectSchema), z.lazy(() => PostWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => PostUpdateWithWhereUniqueWithoutAuthorUsernameInputObjectSchema), z.lazy(() => PostUpdateWithWhereUniqueWithoutAuthorUsernameInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => PostUpdateManyWithWhereWithoutAuthorUsernameInputObjectSchema), z.lazy(() => PostUpdateManyWithWhereWithoutAuthorUsernameInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => PostScalarWhereInputObjectSchema), z.lazy(() => PostScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const PostUncheckedUpdateManyWithoutAuthorUsernameNestedInputObjectSchema: z.ZodType<Prisma.PostUncheckedUpdateManyWithoutAuthorUsernameNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PostUncheckedUpdateManyWithoutAuthorUsernameNestedInput>;
export const PostUncheckedUpdateManyWithoutAuthorUsernameNestedInputObjectZodSchema = makeSchema();
