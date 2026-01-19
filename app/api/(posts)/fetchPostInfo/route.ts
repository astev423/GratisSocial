import { reqWithAuthWrapper } from "@/lib/server/api"
import {
  fetchAllPosts,
  fetchAllPostsByPeopleUserFollows,
  fetchAllPostsFromUserViaTheirId,
  fetchAllPostsFromUserViaTheirUsername,
  getUserLikeStatusOfPosts,
} from "@/lib/server/dbQueries"
import { Post } from "@/types/types"
import { NextResponse } from "next/server"

export const GET = reqWithAuthWrapper(async (req, userId) => {
  const { searchParams } = new URL(req.url)
  const typeOfPostToFetch = searchParams.get("type")
  const username = searchParams.get("username")
  if (!userId || !typeOfPostToFetch) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  let posts: Post[] | null = await tryFetchSpecifiedPosts(userId, typeOfPostToFetch, username)
  if (!posts) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const postIds = posts.map((post) => post.id)
  const likeDislikeInteractions = await getUserLikeStatusOfPosts(postIds, userId)
  const postsMappedToLikeInteractions = new Map(
    likeDislikeInteractions.map((interaction) => [interaction.postId, interaction.liked]),
  )
  const postsWithLikeInfo = posts.map((post) => ({
    ...post,
    status: postsMappedToLikeInteractions.has(post.id)
      ? postsMappedToLikeInteractions.get(post.id)
        ? "liked"
        : "disliked"
      : "neither",
  }))

  return NextResponse.json(postsWithLikeInfo, { status: 200 })
})

async function tryFetchSpecifiedPosts(userId: string, typeOfPostToFetch: string, username: string | null) {
  switch (typeOfPostToFetch) {
    case "following":
      return fetchAllPostsByPeopleUserFollows(userId)
    case "all":
      return fetchAllPosts()
    case "myPosts":
      return fetchAllPostsFromUserViaTheirId(userId)
    case "specificUser":
      if (!username) {
        return null
      }
      return fetchAllPostsFromUserViaTheirUsername(username)
    default:
      return null
  }
}
