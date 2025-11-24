import { fetchFollowInfo } from '@/lib/server/serverUtils';

export default async function FollowerInfo({ username }: { username: string }) {
  const followInfo = await fetchFollowInfo(username);

  if (followInfo == null) {
    return <div className="bg-white font-bold">Error loading follower info</div>;
  }

  return (
    <div className="flex gap-2 flex-col p-8 whitespace-nowrap bg-white font-bold">
      <div className="font-bold text-2xl">Follower Information</div>
      <div className="font-bold text-xl">Followers: {followInfo.followersCount}</div>
      <div className="font-bold text-xl">Following: {followInfo.followingCount}</div>
    </div>
  );
}
