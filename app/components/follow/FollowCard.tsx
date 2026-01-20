import FollowInfo from "./FollowInfo"

export default function FollowCard() {
  return (
    <div className="flex gap-2 flex-col p-8 bg-white font-bold">
      <div className="font-bold text-2xl">Follower Information</div>
      <FollowInfo />
    </div>
  )
}
