import { currentUser } from "@clerk/nextjs/server"

import FollowCard from "@/app/components/follow/FollowCard"
import EditableNameInfo from "../../components/EditableNameInfo"
import NotSignedInError from "../../components/errors/NotSignedInError"
import PostFeed from "../../components/posts/PostFeed"

// Here user can change their prof pic, name, and see all their posts
export default async function MyAccountPage() {
  const user = await currentUser()
  const username = user?.username

  // We enforce user is signed in but TS still thinks username can be null, so check
  if (username == null || username == undefined) {
    return <NotSignedInError />
  }

  return (
    <div className="flex items-start justify-center p-8 gap-20 ">
      <EditableNameInfo />
      <PostFeed postsToSee="myPosts"></PostFeed>
      <FollowCard username={username} />
    </div>
  )
}
