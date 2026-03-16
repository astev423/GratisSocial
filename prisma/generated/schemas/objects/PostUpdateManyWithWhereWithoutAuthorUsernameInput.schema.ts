import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PostScalarWhereInputObjectSchema as PostScalarWhereInputObjectSchema } from './PostScalarWhereInput.schema';
import { PostUpdateManyMutationInputObjectSchema as PostUpdateManyMutationInputObjectSchema } from './PostUpdateManyMutationInput.schema';
import { PostUncheckedUpdateManyWithoutAuthorUsernameInputObjectSchema as PostUncheckedUpdateManyWithoutAuthorUsernameInputObjectSchema } from './PostUncheckedUpdateManyWithoutAuthorUsernameInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PostScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => PostUpdateManyMutationInputObjectSchema), z.lazy(() => PostUncheckedUpdateManyWithoutAuthorUsernameInputObjectSchema)])
}).strict();
export const PostUpdateManyWithWhereWithoutAuthorUsernameInputObjectSchema: z.ZodType<Prisma.PostUpdateManyWithWhereWithoutAuthorUsernameInput> = makeSchema() as unknown as z.ZodType<Prisma.PostUpdateManyWithWhereWithoutAuthorUsernameInput>;
export const PostUpdateManyWithWhereWithoutAuthorUsernameInputObjectZodSchema = makeSchema();
