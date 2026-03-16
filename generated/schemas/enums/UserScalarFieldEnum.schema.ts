import * as z from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id', 'email', 'username', 'firstName', 'lastName', 'createdAt', 'followersCount', 'followingCount'])

export type UserScalarFieldEnum = z.infer<typeof UserScalarFieldEnumSchema>;