import { auth, currentUser } from "@clerk/nextjs/server"
import "server-only"
import { prisma } from "../../prisma/prisma"

// For a lot of these functions we don't need to do ID auth check because clerk proxy.ts blocks
// all non signed in users from accessing all pages, besides the home page

/*
 USER STUFF
*/

export async function tryAddClerkUserToDb() {
  const { userId } = await auth()
  if (userId == null) {
    return
  }

  // If user signed in then check DB if they exist, if not then make account for them
  const user = await prisma.user.findUnique({ where: { id: userId } })
  if (user == null) {
    tryCreateUser()
  }
}

export async function tryCreateUser() {
  const { userId } = await auth()
  if (userId == null) {
    return false
  }

  // Get username and email from ClerkJS and make account in DB with that info
  const user = await currentUser()
  if (user == null || user.primaryEmailAddress == null || user.username == null) {
    console.error("User has no primary email or user doesn't exist")
    return false
  }

  const primaryEmail = user.primaryEmailAddress.emailAddress
  const uniqueUsername = user.username
  const bob = await prisma.user.create({
    data: {
      id: userId,
      email: primaryEmail,
      firstName: "placeholder",
      lastName: "placeholder",
      username: uniqueUsername,
    },
  })
  console.log(`User ${bob} created`)

  return true
}

export async function tryGetUser(username: string) {
  return await prisma.user.findUnique({
    where: {
      username: username,
    },
  })
}

export async function tryFetchUserByGivenId(userId: string) {
  return prisma.user.findUnique({
    where: { id: userId },
    select: {
      username: true,
      firstName: true,
      lastName: true,
      followingCount: true,
      followersCount: true,
    },
  })
}

export async function tryFetchUserByTheirId() {
  const { userId } = await auth()
  if (userId == null) {
    return
  }

  return prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      username: true,
      firstName: true,
      lastName: true,
      followingCount: true,
      followersCount: true,
    },
  })
}

export async function tryFetchUserByUsername(username: string) {
  return prisma.user.findUnique({
    where: { username: username },
    select: {
      id: true,
      username: true,
      firstName: true,
      lastName: true,
      followingCount: true,
      followersCount: true,
    },
  })
}

export async function updateUserById<T extends object>(userId: string, data: T) {
  return await prisma.user.update({
    where: {
      id: userId,
    },
    data: data,
  })
}

/*
 POST STUFF
*/

type PostContent = {
  title: string
  content: string
  authorId: string
  authorUsername: string
}
export async function createPost(postContent: PostContent) {
  return await prisma.post.create({
    data: {
      title: postContent.title,
      content: postContent.content,
      author: {
        connect: { id: postContent.authorId },
      },
      authorUsername: {
        connect: { username: postContent.authorUsername },
      },
    },
  })
}

// Get userId to make sure user can only delete posts made by them
export async function deletePost(postId: string, userId: string) {
  await prisma.post.delete({
    where: {
      authorId: userId,
      id: postId,
    },
  })
}

export async function getUserLikeStatusOfPost(postId: string, userId: string) {
  return await prisma.like.findFirst({
    where: {
      postId: postId,
      likerId: userId,
    },
  })
}

export async function updatePost<T extends object>(postId: string, data: T) {
  return await prisma.post.update({
    where: {
      id: postId,
    },
    data: data,
  })
}

/*
 FOLLOW STUFF
*/

export async function fetchFollowInfoFromGivenId(userId: string) {
  const followersCount = await prisma.follow.count({
    where: {
      personFollowedId: userId,
    },
  })
  const followingCount = await prisma.follow.count({
    where: {
      followerId: userId,
    },
  })

  return { followersCount, followingCount }
}

export async function tryFetchFollowInfoOfUser(username: string) {
  const user = await prisma.user.findFirst({
    where: {
      username: username,
    },
  })
  if (!user) {
    return null
  }

  const followersCount = await prisma.follow.count({
    where: {
      personFollowedId: user.id,
    },
  })
  const followingCount = await prisma.follow.count({
    where: {
      followerId: user.id,
    },
  })

  return { followersCount, followingCount }
}

export async function isUserFollowing(userId: string, viewedUserId: string) {
  const result = await prisma.follow.findFirst({
    where: {
      personFollowedId: viewedUserId,
      followerId: userId,
    },
  })
  if (result == null) {
    return false
  }

  return true
}

export async function followUser(userId: string, viewedUserId: string) {
  await prisma.follow.create({
    data: {
      personFollowedId: viewedUserId,
      followerId: userId,
    },
  })

  await prisma.user.update({
    where: {
      id: viewedUserId,
    },
    data: {
      followersCount: {
        increment: 1,
      },
    },
  })

  await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      followingCount: {
        increment: 1,
      },
    },
  })
}

export async function unfollowUser(userId: string, viewedUserId: string) {
  await prisma.follow.deleteMany({
    where: {
      followerId: userId,
      personFollowedId: viewedUserId,
    },
  })

  await prisma.user.update({
    where: {
      id: viewedUserId,
    },
    data: {
      followersCount: {
        decrement: 1,
      },
    },
  })

  await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      followingCount: {
        decrement: 1,
      },
    },
  })
}

/*
 COMMENT STUFF
*/

export async function createCommentOnPost(postId: string, commentContent: string, commenterUsername: string) {
  return await prisma.comment.create({
    data: {
      postId: postId,
      commenterUsername: commenterUsername,
      content: commentContent,
    },
  })
}

export async function getCommentsOnPost(postId: string) {
  return await prisma.comment.findMany({ where: { postId: postId } })
}
