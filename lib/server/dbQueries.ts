import { auth, currentUser } from "@clerk/nextjs/server"
import type { Prisma } from "@prisma/client"
import type { Post } from "@/types/types"
import "server-only"
import { prisma } from "../../prisma/prisma"

/*
 USER STUFF
*/

function getUserIdOrReturnWrapper<F extends (userId: string) => any>(fn: F) {
  // Need this awaited return type so we can get right return type for things that call this
  return async (): Promise<Awaited<ReturnType<F>> | null> => {
    const { userId } = await auth()
    if (userId === null) {
      return null
    }

    return fn(userId)
  }
}

export const tryAddClerkUserToDb = getUserIdOrReturnWrapper(async (userId) => {
  const user = await prisma.user.findUnique({ where: { id: userId } })
  if (user !== null) {
    console.log("User already in database")
    return false
  }

  await tryCreateUser(userId)
  return true
})

async function tryCreateUser(userId: string) {
  const user = await currentUser()
  if (user === null || user.primaryEmailAddress === null || user.username === null) {
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

function tryFetchUser(whereClause: Prisma.UserWhereUniqueInput) {
  return prisma.user.findUnique({
    where: whereClause,
  })
}

export const tryFetchUserByTheirId = getUserIdOrReturnWrapper((userId: string) =>
  tryFetchUser({ id: userId }),
)

export const tryFetchUserByGivenId = (userId: string) => tryFetchUser({ id: userId })

export const tryFetchUserByUsername = (username: string) => tryFetchUser({ username: username })

export function updateUserById<T extends object>(userId: string, data: T) {
  return prisma.user.update({
    where: {
      id: userId,
    },
    data: data,
  })
}

/*
 POST STUFF
*/

export function createPost(postContent: Pick<Post, "title" | "content" | "authorId" | "posterUsername">) {
  return prisma.post.create({
    data: {
      title: postContent.title,
      content: postContent.content,
      author: {
        connect: { id: postContent.authorId },
      },
      authorUsername: {
        connect: { username: postContent.posterUsername },
      },
    },
  })
}

// Get userId to make sure user can only delete posts made by them
export function deletePost(postId: string, userId: string) {
  return prisma.post.delete({
    where: {
      authorId: userId,
      id: postId,
    },
  })
}

export function getUserLikeStatusOfPost(postId: string, userId: string) {
  return prisma.like.findFirst({
    where: {
      postId: postId,
      likerId: userId,
    },
  })
}

export function getUserLikeStatusOfPosts(postIds: string[], userId: string) {
  return prisma.like.findMany({
    where: {
      postId: { in: postIds },
      likerId: userId,
    },
  })
}

export function updatePost<T extends object>(postId: string, data: T) {
  return prisma.post.update({
    where: {
      id: postId,
    },
    data: data,
  })
}

export function fetchAllPosts() {
  return prisma.post.findMany({
    orderBy: { createdAt: "desc" },
  })
}

export async function fetchAllPostsByPeopleUserFollows(userId: string) {
  const follows = await prisma.follow.findMany({
    where: {
      followerId: userId,
    },
  })
  const followedUserIds = follows.map((f) => f.personFollowedId)

  return findAllPostsWhere({
    authorId: { in: followedUserIds },
  })
}

export function fetchAllPostsFromUserViaTheirId(userId: string) {
  return findAllPostsWhere({ authorId: userId })
}

export function fetchAllPostsFromUserViaTheirUsername(username: string) {
  return findAllPostsWhere({ posterUsername: username })
}

function findAllPostsWhere(whereClause: Prisma.PostWhereInput) {
  return prisma.post.findMany({
    where: whereClause,
    orderBy: { createdAt: "desc" },
  })
}

/*
 FOLLOW STUFF
*/

export async function fetchFollowInfoFromGivenId(userId: string) {
  const followersCount = await fetchFollowCountWhere({ personFollowedId: userId })
  const followingCount = await fetchFollowCountWhere({ followerId: userId })

  return { followersCount, followingCount }
}

function fetchFollowCountWhere(whereClause: Prisma.FollowWhereInput) {
  return prisma.follow.count({
    where: whereClause,
  })
}

export async function isUserFollowing(userId: string, viewedUserId: string) {
  const result = await prisma.follow.findFirst({
    where: {
      personFollowedId: viewedUserId,
      followerId: userId,
    },
  })

  return result !== null
}

export async function followUser(userId: string, viewedUserId: string) {
  // Transaction very important here, if one fails then we must abort all other changes, otherwise
  // we get a partial update and values gets messed up
  await prisma.$transaction([
    createNewFollowRow(userId, viewedUserId),
    updateFollowCountForUser(userId, "increment"),
    updateFollowCountForUser(viewedUserId, "increment"),
  ])
}

export async function unfollowUser(userId: string, viewedUserId: string) {
  await prisma.$transaction([
    deleteFollowRow(userId, viewedUserId),
    updateFollowCountForUser(userId, "decrement"),
    updateFollowCountForUser(viewedUserId, "decrement"),
  ])
}

function createNewFollowRow(userId: string, viewedUserId: string) {
  return prisma.follow.create({
    data: {
      followerId: userId,
      personFollowedId: viewedUserId,
    },
  })
}

function deleteFollowRow(userId: string, viewedUserId: string) {
  return prisma.follow.deleteMany({
    where: {
      followerId: userId,
      personFollowedId: viewedUserId,
    },
  })
}

function updateFollowCountForUser(userId: string, updateBy: "increment" | "decrement") {
  const changeCountBy: { increment: number } | { decrement: number } =
    updateBy === "increment" ? { increment: 1 } : { decrement: 1 }

  return prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      followingCount: changeCountBy,
    },
  })
}

/*
 COMMENT STUFF
*/

export function createCommentOnPost(postId: string, commentContent: string, commenterUsername: string) {
  return prisma.comment.create({
    data: {
      postId: postId,
      content: commentContent,
      commenterUsername: commenterUsername,
    },
  })
}

export function getCommentsOnPost(postId: string) {
  return prisma.comment.findMany({ where: { postId: postId } })
}

/*
 LIKE STUFF
*/
export async function fetchLikeCountOfPost(postId: string) {
  const post = await prisma.post.findUnique({
    where: {
      id: postId,
    },
  })

  return post?.likeCount
}

export function tryFindLikeInfoForUserOnPost(postId: string, userId: string) {
  return prisma.like.findFirst({
    where: {
      postId: postId,
      likerId: userId,
    },
  })
}

export function deleteLikesOnPostFromUser(postId: string, userId: string) {
  return prisma.like.deleteMany({
    where: {
      postId: postId,
      likerId: userId,
    },
  })
}

export function createLikeOnPostFromUser(postId: string, userId: string, newValue: number) {
  return prisma.like.create({
    data: {
      postId: postId,
      likerId: userId,
      liked: newValue === 1,
    },
  })
}

export async function updateLikeCount(postId: string, changeLikeCountBy: number) {
  await prisma.post.update({
    where: { id: postId },
    data: {
      likeCount: {
        increment: changeLikeCountBy,
      },
    },
  })
}
