import * as z from 'zod';

export const UserSchema = z.object({
  id: z.string(),
  email: z.string(),
  username: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  createdAt: z.date(),
  followersCount: z.number().int(),
  followingCount: z.number().int(),
});

export type UserType = z.infer<typeof UserSchema>;
