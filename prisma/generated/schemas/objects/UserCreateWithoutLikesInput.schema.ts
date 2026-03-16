import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PostCreateNestedManyWithoutAuthorInputObjectSchema as PostCreateNestedManyWithoutAuthorInputObjectSchema } from './PostCreateNestedManyWithoutAuthorInput.schema';
import { PostCreateNestedManyWithoutAuthorUsernameInputObjectSchema as PostCreateNestedManyWithoutAuthorUsernameInputObjectSchema } from './PostCreateNestedManyWithoutAuthorUsernameInput.schema';
import { FollowCreateNestedManyWithoutFollowerInputObjectSchema as FollowCreateNestedManyWithoutFollowerInputObjectSchema } from './FollowCreateNestedManyWithoutFollowerInput.schema';
import { FollowCreateNestedManyWithoutPersonFollowedInputObjectSchema as FollowCreateNestedManyWithoutPersonFollowedInputObjectSchema } from './FollowCreateNestedManyWithoutPersonFollowedInput.schema';
import { CommentCreateNestedManyWithoutCommenterInputObjectSchema as CommentCreateNestedManyWithoutCommenterInputObjectSchema } from './CommentCreateNestedManyWithoutCommenterInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  email: z.string(),
  username: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  createdAt: z.coerce.date().optional(),
  followersCount: z.number().int().optional(),
  followingCount: z.number().int().optional(),
  postsById: z.lazy(() => PostCreateNestedManyWithoutAuthorInputObjectSchema).optional(),
  postsByUsername: z.lazy(() => PostCreateNestedManyWithoutAuthorUsernameInputObjectSchema).optional(),
  followers: z.lazy(() => FollowCreateNestedManyWithoutFollowerInputObjectSchema).optional(),
  following: z.lazy(() => FollowCreateNestedManyWithoutPersonFollowedInputObjectSchema).optional(),
  comments: z.lazy(() => CommentCreateNestedManyWithoutCommenterInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutLikesInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutLikesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutLikesInput>;
export const UserCreateWithoutLikesInputObjectZodSchema = makeSchema();
