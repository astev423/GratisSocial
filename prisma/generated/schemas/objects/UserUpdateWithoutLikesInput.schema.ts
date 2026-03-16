import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { PostUpdateManyWithoutAuthorNestedInputObjectSchema as PostUpdateManyWithoutAuthorNestedInputObjectSchema } from './PostUpdateManyWithoutAuthorNestedInput.schema';
import { PostUpdateManyWithoutAuthorUsernameNestedInputObjectSchema as PostUpdateManyWithoutAuthorUsernameNestedInputObjectSchema } from './PostUpdateManyWithoutAuthorUsernameNestedInput.schema';
import { FollowUpdateManyWithoutFollowerNestedInputObjectSchema as FollowUpdateManyWithoutFollowerNestedInputObjectSchema } from './FollowUpdateManyWithoutFollowerNestedInput.schema';
import { FollowUpdateManyWithoutPersonFollowedNestedInputObjectSchema as FollowUpdateManyWithoutPersonFollowedNestedInputObjectSchema } from './FollowUpdateManyWithoutPersonFollowedNestedInput.schema';
import { CommentUpdateManyWithoutCommenterNestedInputObjectSchema as CommentUpdateManyWithoutCommenterNestedInputObjectSchema } from './CommentUpdateManyWithoutCommenterNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  username: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  firstName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  lastName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  followersCount: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  followingCount: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  postsById: z.lazy(() => PostUpdateManyWithoutAuthorNestedInputObjectSchema).optional(),
  postsByUsername: z.lazy(() => PostUpdateManyWithoutAuthorUsernameNestedInputObjectSchema).optional(),
  followers: z.lazy(() => FollowUpdateManyWithoutFollowerNestedInputObjectSchema).optional(),
  following: z.lazy(() => FollowUpdateManyWithoutPersonFollowedNestedInputObjectSchema).optional(),
  comments: z.lazy(() => CommentUpdateManyWithoutCommenterNestedInputObjectSchema).optional()
}).strict();
export const UserUpdateWithoutLikesInputObjectSchema: z.ZodType<Prisma.UserUpdateWithoutLikesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateWithoutLikesInput>;
export const UserUpdateWithoutLikesInputObjectZodSchema = makeSchema();
