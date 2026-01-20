export type Post = {
  id: string
  authorId: string
  posterUsername: string
  title: string
  content: string
  createdAt: Date
  likeCount: number
  commentCount: number
}

export type PostWithLikeInfo = Post & { status: LikeInfo["status"] }

export type User = {
  username: string
  firstName: string
  lastName: string
  followingCount: number
  followersCount: number
}

export type FollowInfo = {
  followers: number
  following: number
}

export type Comment = {
  id: string
  content: string
  commenterUsername: string
  postId: string
}

export type Like = {
  id: string
  liked: boolean
  likerId: string
  postId: string
}

export type LikeInfo = {
  status: "liked" | "disliked" | "neither"
  numLikes: number
}

// This acts like an enum, const objects with string literals are more JS friendly than TS enums
export const LikeInteraction = {
  Like: "like",
  Dislike: "dislike",
  RemoveLike: "removeLike",
  RemoveDislike: "removeDislike",
} as const

//typeof LikeInteraction → the object type
//keyof typeof LikeInteraction → all keys of that object
//ObjectType[AllKeys] → the union of the types of all property values
export type LikeInteraction = (typeof LikeInteraction)[keyof typeof LikeInteraction]

export type TypeOfPostToView = "following" | "all" | "myPosts" | "specificUser"
