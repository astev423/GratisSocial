import React from "react"
import AccountNameInfo from "../components/AccountNameInfo"
import PostFeed from "../components/PostFeed"
import FollowerInfo from "../components/FollowerInfo"
import { auth } from "@clerk/nextjs/server"

// Here user can change their prof pic, name, and see all their posts
const page = async () => {
  const { userId } = await auth()

  // Only show user profile page if they are signed in
  return (
    <div>
      {userId ? (
        <div>
          <div className="flex justify-center p-8 gap-20 ">
            <div>
              <AccountNameInfo />
            </div>
            <PostFeed postsToSee="myPosts"></PostFeed>
            <div>
              <FollowerInfo />
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

export default page
