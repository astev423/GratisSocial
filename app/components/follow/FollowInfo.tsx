"use client";

import { useEffect, useState } from "react";
import FollowButton from "./FollowButton";
import FollowCount from "./FollowCount";
import UnfollowButton from "./UnfollowButton";
import SpinningIcon from "../SpinningIcon";

export default function FollowInfo({ username }: { username: string }) {
  const [isUserFollowing, setIsUserFollowing] = useState(false);
  const [loadingInfo, setLoadingInfo] = useState(true);

  async function getFollowStatus() {
    const response = await fetch("/api/followStatus", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    if (!response) {
      console.error("Couldn't find user");
    }

    const { followStatus } = await response.json();
    setIsUserFollowing(followStatus == "Following");
    setLoadingInfo(false);
  }

  useEffect(() => {
    getFollowStatus();
  }, []);

  if (loadingInfo) {
    return (
      <div className="flex gap-2 flex-col p-8 min-h-50 whitespace-nowrap bg-white font-bold">
        <div className="font-bold text-2xl">Follower Information</div>
        <div className="flex justify-center items-center gap-2">
          <SpinningIcon size={80} />
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-2 flex-col p-8 min-h-50 whitespace-nowrap bg-white font-bold">
      <div className="font-bold text-2xl">Follower Information</div>
      <FollowCount username={username} />
      {isUserFollowing ? (
        <UnfollowButton username={username} />
      ) : (
        <FollowButton username={username} />
      )}
    </div>
  );
}
