import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PostUncheckedCreateNestedManyWithoutAuthorUsernameInputObjectSchema as PostUncheckedCreateNestedManyWithoutAuthorUsernameInputObjectSchema } from './PostUncheckedCreateNestedManyWithoutAuthorUsernameInput.schema';
import { FollowUncheckedCreateNestedManyWithoutFollowerInputObjectSchema as FollowUncheckedCreateNestedManyWithoutFollowerInputObjectSchema } from './FollowUncheckedCreateNestedManyWithoutFollowerInput.schema';
import { FollowUncheckedCreateNestedManyWithoutPersonFollowedInputObjectSchema as FollowUncheckedCreateNestedManyWithoutPersonFollowedInputObjectSchema } from './FollowUncheckedCreateNestedManyWithoutPersonFollowedInput.schema';
import { CommentUncheckedCreateNestedManyWithoutCommenterInputObjectSchema as CommentUncheckedCreateNestedManyWithoutCommenterInputObjectSchema } from './CommentUncheckedCreateNestedManyWithoutCommenterInput.schema';
import { LikeUncheckedCreateNestedManyWithoutLikerInputObjectSchema as LikeUncheckedCreateNestedManyWithoutLikerInputObjectSchema } from './LikeUncheckedCreateNestedManyWithoutLikerInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  email: z.string(),
  username: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  createdAt: z.coerce.date().optional(),
  followersCount: z.number().int().optional(),
  followingCount: z.number().int().optional(),
  postsByUsername: z.lazy(() => PostUncheckedCreateNestedManyWithoutAuthorUsernameInputObjectSchema).optional(),
  followers: z.lazy(() => FollowUncheckedCreateNestedManyWithoutFollowerInputObjectSchema).optional(),
  following: z.lazy(() => FollowUncheckedCreateNestedManyWithoutPersonFollowedInputObjectSchema).optional(),
  comments: z.lazy(() => CommentUncheckedCreateNestedManyWithoutCommenterInputObjectSchema).optional(),
  likes: z.lazy(() => LikeUncheckedCreateNestedManyWithoutLikerInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateWithoutPostsByIdInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutPostsByIdInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateWithoutPostsByIdInput>;
export const UserUncheckedCreateWithoutPostsByIdInputObjectZodSchema = makeSchema();
