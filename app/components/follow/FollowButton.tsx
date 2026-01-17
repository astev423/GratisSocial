import { useViewedUser } from "@/app/context/ViewedUserContext"
import { followUser, unfollowUser } from "@/lib/client/utils"
import { useUser } from "@clerk/nextjs"
import { Dispatch, SetStateAction } from "react"

type FollowButtonProps = {
  following: boolean
  setRefreshKey: Dispatch<SetStateAction<number>>
}

export default function FollowButton({ following, setRefreshKey }: FollowButtonProps) {
  const { viewedUser } = useViewedUser()
  const { user: viewingUser } = useUser()
  if (viewedUser == null || viewingUser == undefined) {
    return
  }

  async function updateFollowCounts() {
    if (following) {
      await unfollowUser(viewedUser.username)
    } else {
      await followUser(viewedUser.username)
    }
    setRefreshKey((i) => i + 1)
  }

  return (
    <button
      onClick={() => updateFollowCounts()}
      className="group bg-gray-400 p-5 mt-5 rounded-2xl hover:cursor-pointer hover:bg-gray-600"
    >
      <div className="grey-button-text hover:scale-110 group-hover:scale-110 ">
        Click Here To {following ? <>Unfollow</> : <>Follow</>}
      </div>
    </button>
  )
}
