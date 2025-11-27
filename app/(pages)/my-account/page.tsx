import FollowCard from "@/app/components/follow/FollowCard"
import { ViewedUserProvider } from "@/app/context/ViewedUserContext"
import { fetchUser } from "@/lib/server/dbQueries"
import EditableNameInfo from "../../components/EditableNameInfo"
import NotSignedInError from "../../components/errors/NotSignedInError"
import PostFeed from "../../components/posts/PostFeed"

// Here user can change their prof pic, name, and see all their posts
export default async function MyAccountPage() {
  const user = await fetchUser()

  // We enforce user is signed in but TS still thinks username can be null, so check
  if (user == null) {
    return <NotSignedInError />
  }

  return (
    <ViewedUserProvider user={user}>
      <div className="flex items-start justify-center p-8 gap-20 ">
        <EditableNameInfo />
        <PostFeed postsToSee="myPosts"></PostFeed>
        <FollowCard />
      </div>
    </ViewedUserProvider>
  )
}
