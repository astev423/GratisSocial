"use client";

import { useViewedUser } from "@/app/context/ViewedUserContext";
import { useFetch } from "@/lib/client/utils";
import { FollowInfo } from "@/types/types";

export default function FollowCount() {
  const { viewedUser } = useViewedUser();
  const {
    data: followInfo,
    loading,
    error,
  } = useFetch<FollowInfo>("/api/fetchFollowCount", "POST", 0, { username: viewedUser.username });

  if (!followInfo) {
    return;
  }

  return (
    <>
      <div className="font-bold text-xl">Followers: {followInfo.followers}</div>
      <div className="font-bold text-xl">Following: {followInfo.following}</div>
    </>
  );
}
