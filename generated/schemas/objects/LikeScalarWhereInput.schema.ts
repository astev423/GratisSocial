import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema'

const likescalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => LikeScalarWhereInputObjectSchema), z.lazy(() => LikeScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => LikeScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => LikeScalarWhereInputObjectSchema), z.lazy(() => LikeScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  liked: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  likerId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  postId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const LikeScalarWhereInputObjectSchema: z.ZodType<Prisma.LikeScalarWhereInput> = likescalarwhereinputSchema as unknown as z.ZodType<Prisma.LikeScalarWhereInput>;
export const LikeScalarWhereInputObjectZodSchema = likescalarwhereinputSchema;
