import FollowInfo from "./FollowInfo"

export default function FollowCard() {
  return (
    <div className="flex gap-2 flex-col p-8 bg-white font-bold">
      <h2 className="text-2xl">Follower Information</h2>
      <div className="h-[17vh]">
        <FollowInfo />
      </div>
    </div>
  )
}
