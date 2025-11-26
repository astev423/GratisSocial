export default function FollowButton({ following }: { following: boolean }) {
  return (
    <button className="group bg-gray-400 p-5 mt-5 rounded-2xl hover:cursor-pointer hover:bg-gray-600">
      <div className="grey-button-text hover:scale-110 w-55 group-hover:scale-110 ">
        Click Here To {following ? <>Unfollow</> : <>Follow</>}
      </div>
    </button>
  )
}
