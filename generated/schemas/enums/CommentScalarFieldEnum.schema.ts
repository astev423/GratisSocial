import * as z from 'zod';

export const CommentScalarFieldEnumSchema = z.enum(['id', 'content', 'commenterUsername', 'postId'])

export type CommentScalarFieldEnum = z.infer<typeof CommentScalarFieldEnumSchema>;