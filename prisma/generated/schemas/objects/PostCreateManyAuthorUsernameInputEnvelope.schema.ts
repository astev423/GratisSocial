import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PostCreateManyAuthorUsernameInputObjectSchema as PostCreateManyAuthorUsernameInputObjectSchema } from './PostCreateManyAuthorUsernameInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => PostCreateManyAuthorUsernameInputObjectSchema), z.lazy(() => PostCreateManyAuthorUsernameInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const PostCreateManyAuthorUsernameInputEnvelopeObjectSchema: z.ZodType<Prisma.PostCreateManyAuthorUsernameInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.PostCreateManyAuthorUsernameInputEnvelope>;
export const PostCreateManyAuthorUsernameInputEnvelopeObjectZodSchema = makeSchema();
