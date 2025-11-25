"use client";

import { useEffect, useState } from "react";
import FollowButton from "./FollowButton";
import FollowCount from "./FollowCount";
import UnfollowButton from "./UnfollowButton";

export default function FollowInfo({ username }: { username: string }) {
  const [isUserFollowing, setIsUserFollowing] = useState(false);

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
  }

  useEffect(() => {
    getFollowStatus();
  }, []);

  return (
    <div className="flex gap-2 flex-col p-8 whitespace-nowrap bg-white font-bold">
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
