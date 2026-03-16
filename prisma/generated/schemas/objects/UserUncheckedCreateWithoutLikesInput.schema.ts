import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PostUncheckedCreateNestedManyWithoutAuthorInputObjectSchema as PostUncheckedCreateNestedManyWithoutAuthorInputObjectSchema } from './PostUncheckedCreateNestedManyWithoutAuthorInput.schema';
import { PostUncheckedCreateNestedManyWithoutAuthorUsernameInputObjectSchema as PostUncheckedCreateNestedManyWithoutAuthorUsernameInputObjectSchema } from './PostUncheckedCreateNestedManyWithoutAuthorUsernameInput.schema';
import { FollowUncheckedCreateNestedManyWithoutFollowerInputObjectSchema as FollowUncheckedCreateNestedManyWithoutFollowerInputObjectSchema } from './FollowUncheckedCreateNestedManyWithoutFollowerInput.schema';
import { FollowUncheckedCreateNestedManyWithoutPersonFollowedInputObjectSchema as FollowUncheckedCreateNestedManyWithoutPersonFollowedInputObjectSchema } from './FollowUncheckedCreateNestedManyWithoutPersonFollowedInput.schema';
import { CommentUncheckedCreateNestedManyWithoutCommenterInputObjectSchema as CommentUncheckedCreateNestedManyWithoutCommenterInputObjectSchema } from './CommentUncheckedCreateNestedManyWithoutCommenterInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  email: z.string(),
  username: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  createdAt: z.coerce.date().optional(),
  followersCount: z.number().int().optional(),
  followingCount: z.number().int().optional(),
  postsById: z.lazy(() => PostUncheckedCreateNestedManyWithoutAuthorInputObjectSchema).optional(),
  postsByUsername: z.lazy(() => PostUncheckedCreateNestedManyWithoutAuthorUsernameInputObjectSchema).optional(),
  followers: z.lazy(() => FollowUncheckedCreateNestedManyWithoutFollowerInputObjectSchema).optional(),
  following: z.lazy(() => FollowUncheckedCreateNestedManyWithoutPersonFollowedInputObjectSchema).optional(),
  comments: z.lazy(() => CommentUncheckedCreateNestedManyWithoutCommenterInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateWithoutLikesInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutLikesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateWithoutLikesInput>;
export const UserUncheckedCreateWithoutLikesInputObjectZodSchema = makeSchema();
