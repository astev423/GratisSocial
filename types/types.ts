export type Post = {
  id: string
  userId: string
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
  commenterId: string
  postId: string
}
