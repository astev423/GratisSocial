import * as z from 'zod';

export const FollowScalarFieldEnumSchema = z.enum(['id', 'followerId', 'personFollowedId'])

export type FollowScalarFieldEnum = z.infer<typeof FollowScalarFieldEnumSchema>;