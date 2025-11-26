export default function FollowButton({ username }: { username: string }) {
  return (
    <button className="group bg-gray-400 p-5 mt-5 rounded-2xl hover:cursor-pointer hover:bg-gray-600">
      <span className="grey-button-text hover:scale-110 group-hover:scale-110 ">
        Click Here To Follow {username}
      </span>
    </button>
  );
}
