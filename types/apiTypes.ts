import type {
  Comment as CommentTable,
  Like as LikeTable,
  Post as PostTable,
  User as UserTable,
} from "@prisma/client"

export type Post = PostTable

export type PostWithLikeInfo = Post & { status: LikeInfo["status"] }

export type User = Omit<UserTable, "id" | "email">

export type FollowInfo = {
  followers: number
  following: number
}

export type Comment = CommentTable

export type Like = LikeTable

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

export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE"
