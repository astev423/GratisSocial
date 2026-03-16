import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateNestedOneWithoutLikesInputObjectSchema as UserCreateNestedOneWithoutLikesInputObjectSchema } from './UserCreateNestedOneWithoutLikesInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  liked: z.boolean(),
  liker: z.lazy(() => UserCreateNestedOneWithoutLikesInputObjectSchema)
}).strict();
export const LikeCreateWithoutPostInputObjectSchema: z.ZodType<Prisma.LikeCreateWithoutPostInput> = makeSchema() as unknown as z.ZodType<Prisma.LikeCreateWithoutPostInput>;
export const LikeCreateWithoutPostInputObjectZodSchema = makeSchema();
