import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { PostUncheckedUpdateManyWithoutAuthorNestedInputObjectSchema as PostUncheckedUpdateManyWithoutAuthorNestedInputObjectSchema } from './PostUncheckedUpdateManyWithoutAuthorNestedInput.schema';
import { PostUncheckedUpdateManyWithoutAuthorUsernameNestedInputObjectSchema as PostUncheckedUpdateManyWithoutAuthorUsernameNestedInputObjectSchema } from './PostUncheckedUpdateManyWithoutAuthorUsernameNestedInput.schema';
import { FollowUncheckedUpdateManyWithoutFollowerNestedInputObjectSchema as FollowUncheckedUpdateManyWithoutFollowerNestedInputObjectSchema } from './FollowUncheckedUpdateManyWithoutFollowerNestedInput.schema';
import { FollowUncheckedUpdateManyWithoutPersonFollowedNestedInputObjectSchema as FollowUncheckedUpdateManyWithoutPersonFollowedNestedInputObjectSchema } from './FollowUncheckedUpdateManyWithoutPersonFollowedNestedInput.schema';
import { CommentUncheckedUpdateManyWithoutCommenterNestedInputObjectSchema as CommentUncheckedUpdateManyWithoutCommenterNestedInputObjectSchema } from './CommentUncheckedUpdateManyWithoutCommenterNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  username: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  firstName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  lastName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  followersCount: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  followingCount: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  postsById: z.lazy(() => PostUncheckedUpdateManyWithoutAuthorNestedInputObjectSchema).optional(),
  postsByUsername: z.lazy(() => PostUncheckedUpdateManyWithoutAuthorUsernameNestedInputObjectSchema).optional(),
  followers: z.lazy(() => FollowUncheckedUpdateManyWithoutFollowerNestedInputObjectSchema).optional(),
  following: z.lazy(() => FollowUncheckedUpdateManyWithoutPersonFollowedNestedInputObjectSchema).optional(),
  comments: z.lazy(() => CommentUncheckedUpdateManyWithoutCommenterNestedInputObjectSchema).optional()
}).strict();
export const UserUncheckedUpdateWithoutLikesInputObjectSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutLikesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedUpdateWithoutLikesInput>;
export const UserUncheckedUpdateWithoutLikesInputObjectZodSchema = makeSchema();
