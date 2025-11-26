import type { User } from "@/types/types"
import { ViewedUserProvider } from "../../providers/ViewedUserContext"
import FollowInfo from "./FollowInfo"

type UserProp = {
  accountPageUser: User
}

export default function FollowCard({ accountPageUser }: UserProp) {
  return (
    <ViewedUserProvider user={accountPageUser}>
      <div className="flex gap-2 flex-col p-8 w-80 h-60 whitespace-nowrap bg-white font-bold">
        <div className="font-bold text-2xl">Follower Information</div>
        <div className="h-50">
          <FollowInfo />
        </div>
      </div>
    </ViewedUserProvider>
  )
}
