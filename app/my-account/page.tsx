import { currentUser } from "@clerk/nextjs/server";

import EditableNameInfo from "../components/EditableNameInfo";
import FollowerInfo from "../components/FollowerInfo";
import NotSignedInError from "../components/NotSignedInError";
import PostFeed from "../components/posts/PostFeed";

// Here user can change their prof pic, name, and see all their posts
export default async function MyAccountPage() {
  const user = await currentUser();
  const username = user?.username;

  // Only show user profile page if they are signed in
  if (username == null || username == undefined) {
    return <NotSignedInError />;
  }

  return (
    <div className="flex items-start justify-center p-8 gap-20 ">
      <EditableNameInfo />
      <PostFeed postsToSee="myPosts"></PostFeed>
      <FollowerInfo username={username} />
    </div>
  );
}
