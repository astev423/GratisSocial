import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PostCountOutputTypeCountCommentsArgsObjectSchema as PostCountOutputTypeCountCommentsArgsObjectSchema } from './PostCountOutputTypeCountCommentsArgs.schema';
import { PostCountOutputTypeCountLikesArgsObjectSchema as PostCountOutputTypeCountLikesArgsObjectSchema } from './PostCountOutputTypeCountLikesArgs.schema'

const makeSchema = () => z.object({
  comments: z.union([z.boolean(), z.lazy(() => PostCountOutputTypeCountCommentsArgsObjectSchema)]).optional(),
  likes: z.union([z.boolean(), z.lazy(() => PostCountOutputTypeCountLikesArgsObjectSchema)]).optional()
}).strict();
export const PostCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.PostCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.PostCountOutputTypeSelect>;
export const PostCountOutputTypeSelectObjectZodSchema = makeSchema();
