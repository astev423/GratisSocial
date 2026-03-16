import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FollowWhereInputObjectSchema as FollowWhereInputObjectSchema } from './FollowWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FollowWhereInputObjectSchema).optional()
}).strict();
export const UserCountOutputTypeCountFollowingArgsObjectSchema = makeSchema();
export const UserCountOutputTypeCountFollowingArgsObjectZodSchema = makeSchema();
