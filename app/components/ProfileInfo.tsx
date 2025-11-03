import React from "react";

export default function ProfileInfo() {
  return (
    <div className="flex gap-2 flex-col p-8 whitespace-nowrap bg-white font-bold">
      <div className="font-bold text-2xl">Follower Information</div>
      <div className="font-bold text-xl">Followers: </div>
      <div className="font-bold text-xl">Following: </div>
    </div>
  );
}
