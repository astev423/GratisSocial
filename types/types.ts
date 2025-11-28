export type Post = {
  id: string
  userId: string
  posterUsername: string
  title: string
  content: string
  createdAt: string
  likeCount: number
  likerIds: string[]
  commentCount: number
  commentsIds: string[]
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
