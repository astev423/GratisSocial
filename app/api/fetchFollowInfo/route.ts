import { prisma } from "@/prisma/prisma";
import { NextResponse } from "next/server";

// Take in username and return follow info
export async function POST(request: Request) {
  const username = await request.json();
  console.log(`hello ${username}`);

  // Use username to get id
  const user = await prisma.user.findFirst({
    where: {
      username: username,
    },
  });
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 400 });
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

  return NextResponse.json(
    { following: followingCount, followers: followersCount },
    { status: 200 },
  );
}
