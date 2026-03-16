import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PostScalarWhereInputObjectSchema as PostScalarWhereInputObjectSchema } from './PostScalarWhereInput.schema';
import { PostUpdateManyMutationInputObjectSchema as PostUpdateManyMutationInputObjectSchema } from './PostUpdateManyMutationInput.schema';
import { PostUncheckedUpdateManyWithoutAuthorInputObjectSchema as PostUncheckedUpdateManyWithoutAuthorInputObjectSchema } from './PostUncheckedUpdateManyWithoutAuthorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PostScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => PostUpdateManyMutationInputObjectSchema), z.lazy(() => PostUncheckedUpdateManyWithoutAuthorInputObjectSchema)])
}).strict();
export const PostUpdateManyWithWhereWithoutAuthorInputObjectSchema: z.ZodType<Prisma.PostUpdateManyWithWhereWithoutAuthorInput> = makeSchema() as unknown as z.ZodType<Prisma.PostUpdateManyWithWhereWithoutAuthorInput>;
export const PostUpdateManyWithWhereWithoutAuthorInputObjectZodSchema = makeSchema();
