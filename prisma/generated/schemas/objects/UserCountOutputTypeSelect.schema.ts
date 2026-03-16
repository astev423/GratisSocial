import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCountOutputTypeCountPostsByIdArgsObjectSchema as UserCountOutputTypeCountPostsByIdArgsObjectSchema } from './UserCountOutputTypeCountPostsByIdArgs.schema';
import { UserCountOutputTypeCountPostsByUsernameArgsObjectSchema as UserCountOutputTypeCountPostsByUsernameArgsObjectSchema } from './UserCountOutputTypeCountPostsByUsernameArgs.schema';
import { UserCountOutputTypeCountFollowersArgsObjectSchema as UserCountOutputTypeCountFollowersArgsObjectSchema } from './UserCountOutputTypeCountFollowersArgs.schema';
import { UserCountOutputTypeCountFollowingArgsObjectSchema as UserCountOutputTypeCountFollowingArgsObjectSchema } from './UserCountOutputTypeCountFollowingArgs.schema';
import { UserCountOutputTypeCountCommentsArgsObjectSchema as UserCountOutputTypeCountCommentsArgsObjectSchema } from './UserCountOutputTypeCountCommentsArgs.schema';
import { UserCountOutputTypeCountLikesArgsObjectSchema as UserCountOutputTypeCountLikesArgsObjectSchema } from './UserCountOutputTypeCountLikesArgs.schema'

const makeSchema = () => z.object({
  postsById: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountPostsByIdArgsObjectSchema)]).optional(),
  postsByUsername: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountPostsByUsernameArgsObjectSchema)]).optional(),
  followers: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountFollowersArgsObjectSchema)]).optional(),
  following: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountFollowingArgsObjectSchema)]).optional(),
  comments: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountCommentsArgsObjectSchema)]).optional(),
  likes: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountLikesArgsObjectSchema)]).optional()
}).strict();
export const UserCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.UserCountOutputTypeSelect>;
export const UserCountOutputTypeSelectObjectZodSchema = makeSchema();
