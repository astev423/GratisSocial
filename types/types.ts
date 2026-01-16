export type Post = {
  id: string
  authorId: string
  posterUsername: string
  title: string
  content: string
  createdAt: string
  likeCount: number
  commentCount: number
}

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

export type TypeOfPostToView = "following" | "all" | "myPosts" | "specificUser"
