"use client";

import { TypeOfPostToView } from "@/types/types";
import { useState } from "react";
import CreatePost from "./CreatePost";
import PostFeed from "./PostFeed";
import SortPostsBy from "./SortPostsBy";

export default function HomepagePostStuff() {
  // Keys trigger reload of component they are passed into when updated
  // Use server actions to refresh posts instead of client
  const [refreshKey, setRefreshKey] = useState(0);
  const [postsToSee, setpostsToSee] = useState<TypeOfPostToView>("all");

  return (
    <div className="flex flex-col w-[40vw] gap-15 mt-20">
      <CreatePost setRefreshKey={setRefreshKey} />
      <SortPostsBy
        setRefreshKey={setRefreshKey}
        postsToSee={postsToSee}
        setPostsToSee={setpostsToSee}
      ></SortPostsBy>
      <PostFeed key={refreshKey} postsToSee={postsToSee} />
    </div>
  );
}
