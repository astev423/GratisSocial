import FailedToFindUser from "@/app/components/errors/FailedToFindUser"
import ProfileInfo from "@/app/components/ProfileInfo"

import FollowCard from "@/app/components/follow/FollowCard"
import { ViewedUserProvider } from "@/app/context/ViewedUserContext"
import { fetchUser } from "../../../../lib/server/dbQueries"
import PostFeed from "../../../components/posts/PostFeed"

type PageProps = {
  params: Promise<{ username: string }>
}

export default async function UserPage({ params }: PageProps) {
  const { username: paramsUsername } = await params
  const accountPageUser = await fetchUser(paramsUsername)
  if (accountPageUser == null) {
    return <FailedToFindUser />
  }

  return (
    <ViewedUserProvider user={accountPageUser}>
      <div className="flex items-start justify-center p-8 gap-20 ">
        <ProfileInfo />
        <PostFeed username={paramsUsername} postsToSee="specificUser" />
        <FollowCard />
      </div>
    </ViewedUserProvider>
  )
}
