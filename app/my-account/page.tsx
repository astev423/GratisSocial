import AccountNameInfo from "../components/AccountNameInfo"
import PostFeed from "../components/PostFeed"
import FollowerInfo from "../components/FollowerInfo"
import { currentUser } from "@clerk/nextjs/server"

// Here user can change their prof pic, name, and see all their posts
export default async function MyAccountPage() {
  const user = await currentUser()
  const username = user?.username

  // Only show user profile page if they are signed in
  return (
    <div>
      {username ? (
        <div>
          <div className="flex justify-center p-8 gap-20 ">
            <div>
              <AccountNameInfo />
            </div>
            <PostFeed postsToSee="myPosts"></PostFeed>
            <div>
              <FollowerInfo username={username} />
            </div>
          </div>
        </div>
      ) : (
        <div className="center-menu flex flex-col items-center justify-center gap-15 mt-20">
          <div className="font-bold">You must sign in to see accounts</div>
        </div>
      )}
    </div>
  )
}
