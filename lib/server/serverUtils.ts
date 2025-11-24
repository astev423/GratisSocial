import { auth, currentUser } from '@clerk/nextjs/server';
import 'server-only';

import { prisma } from '../prisma';

export async function prismaQueryUserByUsername(username: string) {
  const user = await prisma.user.findUnique({
    where: { username },
    select: { username: true, firstName: true, lastName: true },
  });

  return user;
}

export async function fetchUser(username: string) {
  const user = await prismaQueryUserByUsername(username);
  if (!user) {
    console.log('Error fetching user');
  }

  return user;
}

export async function fetchFollowInfo(username: string) {
  const user = await prisma.user.findFirst({
    where: {
      username: username,
    },
  });
  if (!user) {
    return null;
  }

  const { id: userId } = user;

  // Use id to get follower infomation
  const followersCount = await prisma.follow.count({
    where: {
      personFollowedId: userId,
    },
  });
  const followingCount = await prisma.follow.count({
    where: {
      followerId: userId,
    },
  });

  return { followersCount, followingCount };
}

export async function createUser() {
  const { userId } = await auth();
  if (!userId) {
    return null;
  }

  // Get username and email from ClerkJS and make account in DB with that info
  const user = await currentUser();
  const primaryEmail = user?.emailAddresses.find(
    (email) => email.id === user.primaryEmailAddressId,
  )?.emailAddress;
  const uniqueUsername = user?.username || '';
  const newUser = await prisma.user.create({
    data: {
      id: userId,
      email: primaryEmail || '',
      firstName: 'placeholder',
      lastName: 'placeholder',
      username: uniqueUsername,
    },
  });

  return newUser;
}
