'use client'

import { useFetch } from '@/lib/client/utils'
import SpinningIcon from '../SpinningIcon'
import FollowButton from './FollowButton'
import FollowCount from './FollowCount'
import UnfollowButton from './UnfollowButton'

type FollowStatus = {
  followStatus: 'Following' | 'Not Following'
}

export default function FollowInfo({ username }: { username: string }) {
  const { data, loading, error } = useFetch<FollowStatus>('/api/followStatus', { username })

  console.log(data)
  const isUserFollowing = data?.followStatus == 'Following'

  if (error) {
  } else if (loading) {
    return (
      <div className="flex gap-2 flex-col p-8 h-60 whitespace-nowrap bg-white font-bold">
        <div className="font-bold text-2xl">Follower Information</div>
        <div className="flex justify-center items-center gap-2">
          <SpinningIcon size={80} />
        </div>
      </div>
    )
  }

  return (
    <div className="flex gap-2 flex-col p-8 h-60 whitespace-nowrap bg-white font-bold">
      <div className="font-bold text-2xl">Follower Information</div>
      <FollowCount username={username} />
      {isUserFollowing ? <UnfollowButton username={username} /> : <FollowButton username={username} />}
    </div>
  )
}
