import * as z from 'zod';

export const LikeScalarFieldEnumSchema = z.enum(['id', 'liked', 'likerId', 'postId'])

export type LikeScalarFieldEnum = z.infer<typeof LikeScalarFieldEnumSchema>;