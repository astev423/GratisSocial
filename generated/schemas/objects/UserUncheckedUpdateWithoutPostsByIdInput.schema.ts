import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { PostUncheckedUpdateManyWithoutAuthorUsernameNestedInputObjectSchema as PostUncheckedUpdateManyWithoutAuthorUsernameNestedInputObjectSchema } from './PostUncheckedUpdateManyWithoutAuthorUsernameNestedInput.schema';
import { FollowUncheckedUpdateManyWithoutFollowerNestedInputObjectSchema as FollowUncheckedUpdateManyWithoutFollowerNestedInputObjectSchema } from './FollowUncheckedUpdateManyWithoutFollowerNestedInput.schema';
import { FollowUncheckedUpdateManyWithoutPersonFollowedNestedInputObjectSchema as FollowUncheckedUpdateManyWithoutPersonFollowedNestedInputObjectSchema } from './FollowUncheckedUpdateManyWithoutPersonFollowedNestedInput.schema';
import { CommentUncheckedUpdateManyWithoutCommenterNestedInputObjectSchema as CommentUncheckedUpdateManyWithoutCommenterNestedInputObjectSchema } from './CommentUncheckedUpdateManyWithoutCommenterNestedInput.schema';
import { LikeUncheckedUpdateManyWithoutLikerNestedInputObjectSchema as LikeUncheckedUpdateManyWithoutLikerNestedInputObjectSchema } from './LikeUncheckedUpdateManyWithoutLikerNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  username: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  firstName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  lastName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  followersCount: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  followingCount: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  postsByUsername: z.lazy(() => PostUncheckedUpdateManyWithoutAuthorUsernameNestedInputObjectSchema).optional(),
  followers: z.lazy(() => FollowUncheckedUpdateManyWithoutFollowerNestedInputObjectSchema).optional(),
  following: z.lazy(() => FollowUncheckedUpdateManyWithoutPersonFollowedNestedInputObjectSchema).optional(),
  comments: z.lazy(() => CommentUncheckedUpdateManyWithoutCommenterNestedInputObjectSchema).optional(),
  likes: z.lazy(() => LikeUncheckedUpdateManyWithoutLikerNestedInputObjectSchema).optional()
}).strict();
export const UserUncheckedUpdateWithoutPostsByIdInputObjectSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutPostsByIdInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedUpdateWithoutPostsByIdInput>;
export const UserUncheckedUpdateWithoutPostsByIdInputObjectZodSchema = makeSchema();
