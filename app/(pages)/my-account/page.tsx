import FollowCard from "@/app/components/follow/FollowCard"
import { ViewedUserProvider } from "@/app/context/ViewedUserContext"
import { tryFetchUserByTheirId } from "@/lib/server/dbQueries"
import EditableNameInfo from "../../components/EditableNameInfo"
import NotSignedInError from "../../components/errors/NotSignedInError"
import PostFeed from "../../components/posts/PostFeed"

export default async function MyAccountPage() {
  const user = await tryFetchUserByTheirId()
  if (!user) {
    return <NotSignedInError />
  }

  return (
    <ViewedUserProvider viewedUser={user}>
      <div className="flex items-start justify-center p-8 gap-20 ">
        <div className="w-[30vw]">
          <EditableNameInfo />
        </div>
        <div className="w-[40vw]">
          <PostFeed postsToSee="myPosts" />
        </div>
        <div className="w-[25vw]">
          <FollowCard />
        </div>
      </div>
    </ViewedUserProvider>
  )
}
