import FailedToFindUser from "@/app/components/errors/FailedToFindUser"
import FollowCard from "@/app/components/follow/FollowCard"
import ProfileInfo from "@/app/components/ProfileInfo"
import { ViewedUserProvider } from "@/app/context/ViewedUserContext"
import { tryFetchUserByUsername } from "@/lib/server/dbQueries"
import PostFeed from "../../../components/posts/PostFeed"

type PageProps = {
  params: Promise<{ username: string }>
}

export default async function UserPage({ params }: PageProps) {
  const { username: paramsUsername } = await params
  const accountPageUser = await tryFetchUserByUsername(paramsUsername)
  if (accountPageUser === null) {
    return <FailedToFindUser />
  }

  return (
    <ViewedUserProvider viewedUser={accountPageUser}>
      <div className="flex flex-col md:flex-row items-start justify-center p-8 gap-20 ">
        <ProfileInfo />
        <div className="w-[40vw] ">
          <PostFeed username={paramsUsername} postsToSee="specificUser" />
        </div>
        <FollowCard />
      </div>
    </ViewedUserProvider>
  )
}
