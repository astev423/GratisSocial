import { useViewedUser } from "@/app/context/ViewedUserContext"
import { followUser, unfollowUser } from "@/lib/client/utils"
import { Dispatch, SetStateAction } from "react"

type FollowButtonProps = {
  following: boolean
  setRefreshKey: Dispatch<SetStateAction<number>>
}

export default function FollowButton({ following, setRefreshKey }: FollowButtonProps) {
  const { username } = useViewedUser()

  return (
    <button
      onClick={() => {
        setRefreshKey((i) => i + 1)
        following ? unfollowUser(username) : followUser(username)
      }}
      className="group bg-gray-400 p-5 mt-5 rounded-2xl hover:cursor-pointer hover:bg-gray-600"
    >
      <div className="grey-button-text hover:scale-110 w-55 group-hover:scale-110 ">
        Click Here To {following ? <>Unfollow</> : <>Follow</>}
      </div>
    </button>
  )
}
