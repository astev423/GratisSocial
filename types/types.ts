export type Post = {
  id: string
  userId: string
  posterUsername: string
  title: string
  content: string
  createdAt: string
  likes: number
  comments: number
}

export type User = {
  username: string
  firstName: string
  lastName: string
}
