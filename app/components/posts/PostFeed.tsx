"use client";

import { useEffect, useState } from "react";
import Post from "./Post";
import type { Post as PostType } from "../../../types/types";

// Union for enum like safety, prevent mispellings, question mark makes username optional
type PostFeedProps = {
  postsToSee: "following" | "all" | "myPosts" | "specificUser";
  username?: string | undefined;
};

export default function PostFeed({
  postsToSee,
  username = undefined,
}: PostFeedProps) {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [loading, setLoading] = useState(true);
  const loadingPost: PostType = {
    id: "Loading Post",
    userId: "loadingPost",
    posterUsername: "Loading Post",
    title: "Loading Post...",
    content: "Loading Post",
    createdAt: "Loading Post",
    likes: 0,
    comments: 0,
  };

  async function fetchPosts(): Promise<void> {
    const url = username
      ? `/api/posts?type=${postsToSee}&username=${encodeURIComponent(username)}`
      : `/api/posts?type=${postsToSee}`;

    const response = await fetch(url);
    if (!response.ok) {
      console.log("Failed to fetch posts in PostFeed");
      return;
    }

    const data: PostType[] = await response.json();
    setPosts(data.reverse());
    setLoading(false);
  }

  // Fetch all posts depending on which posts selected in props
  useEffect(() => {
    fetchPosts();
  }, [postsToSee]);

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center gap-5">
        <div className="text-3xl bg-white p-5 w-150 text-center font-bold">
          Posts
        </div>
        <div className="flex flex-col gap-5">
          <Post refetch={fetchPosts} post={loadingPost} key={"a"} />
          <Post refetch={fetchPosts} post={loadingPost} key={"b"} />
          <Post refetch={fetchPosts} post={loadingPost} key={"c"} />
        </div>
      </div>
    );
  }

  // If no posts then notify user of problem, otherwise map through all posts and make cards for each
  if (posts.length == 0) {
    return (
      <div className="flex flex-col justify-center items-center gap-5">
        <div className="text-3xl bg-white p-5 w-150 text-center font-bold">
          No posts found
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <div className="text-3xl bg-white p-5 w-150 text-center font-bold">
        Posts
      </div>
      <div className="flex flex-col gap-5">
        {posts.map((post) => (
          // Props get passed in as an object even if just one, key gets stripped out of obj
          <Post refetch={fetchPosts} post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
}
