import { auth, currentUser } from "@clerk/nextjs/server";
import "server-only";

import { prisma } from "../../prisma/prisma";

export async function addClerkUserToDb() {
  const { userId } = await auth();
  if (!userId) {
    return;
  }

  // If user signed in then check DB if they exist, if not then make account for them
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (user == null) {
    createUser();
  }
}

export async function fetchUser(username: string) {
  return prisma.user.findUnique({
    where: { username },
    select: { username: true, firstName: true, lastName: true },
  });
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
  if (userId == null) {
    return false;
  }

  // Get username and email from ClerkJS and make account in DB with that info
  const user = await currentUser();
  if (user?.primaryEmailAddress == null || user?.username == null) {
    console.error("User has no primary email or user doesn't exist");
    return false;
  }

  const primaryEmail = user.primaryEmailAddress.emailAddress;
  const uniqueUsername = user.username;
  const bob = await prisma.user.create({
    data: {
      id: userId,
      email: primaryEmail,
      firstName: "placeholder",
      lastName: "placeholder",
      username: uniqueUsername,
    },
  });
  console.log(`User ${bob} created`);

  return true;
}
