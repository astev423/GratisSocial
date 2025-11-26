import FailedToFindUser from "@/app/components/errors/FailedToFindUser"
import ProfileInfo from "@/app/components/ProfileInfo"

import FollowCard from "@/app/components/follow/FollowCard"
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
    <div className="flex items-center justify-center">
      <div className="flex m-20 gap-15">
        <div className="grow-0">
          <ProfileInfo user={accountPageUser} />
        </div>
        <PostFeed username={paramsUsername} postsToSee="specificUser" />
        <div className="grow-0">
          <FollowCard username={paramsUsername} />
        </div>
      </div>
    </div>
  )
}
