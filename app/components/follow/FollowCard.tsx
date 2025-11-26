import FollowInfo from "./FollowInfo"

export default function FollowCard({ username }: { username: string }) {
  return (
    <div className="flex gap-2 flex-col p-8 w-80 h-60 whitespace-nowrap bg-white font-bold">
      <div className="font-bold text-2xl">Follower Information</div>
      <div className="h-50">
        <FollowInfo username={username} />
      </div>
    </div>
  )
}
