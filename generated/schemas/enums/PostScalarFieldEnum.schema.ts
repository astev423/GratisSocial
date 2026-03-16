import * as z from 'zod';

export const PostScalarFieldEnumSchema = z.enum(['id', 'title', 'content', 'createdAt', 'authorId', 'posterUsername', 'commentCount', 'likeCount'])

export type PostScalarFieldEnum = z.infer<typeof PostScalarFieldEnumSchema>;