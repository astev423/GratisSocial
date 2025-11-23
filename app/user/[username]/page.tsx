"use client"
import FollowerInfo from "@/app/components/FollowerInfo"
import PostFeed from "../../components/posts/PostFeed"
import ProfileInfo from "@/app/components/ProfileInfo"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import type { User } from "../../../types/types"
import { useAuth } from "@clerk/nextjs"
import NotSignedInError from "@/app/components/NotSignedInError"

const defaultUser: User = {
  username: "temp",
  firstName: "temp",
  lastName: "temp",
}

// This can be made a server component since we don't need to update data, work on that next

// Page is based off unique username of user, similar to my-account page but cant be edited
export default function UserPage() {
  const { userId } = useAuth()
  const params = useParams()
  const { username: paramsUsername } = params
  const [user, setUser] = useState<User>(defaultUser)
  const [foundUser, setFoundUser] = useState(false)
  const [loading, setLoading] = useState(true)

  async function fetchUser() {
    const response = await fetch(`/api/fetchUser?username=${paramsUsername}`)
    if (!response.ok) {
      console.log("Error fetching user")
      setLoading(false)
      return
    }

    const data: User = await response.json()
    // data is the whole json object for all user data. even userid and other stuff
    const { username, firstName, lastName } = data
    setUser({
      username: username,
      firstName: firstName,
      lastName: lastName,
    })
    setFoundUser(true)
    setLoading(false)
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return userId != null ? (
    <div className="flex items-center justify-center">
      {foundUser ? (
        <div className="flex m-20 gap-15">
          <div className="grow-0">
            <ProfileInfo
              username={user.username}
              firstName={user.firstName}
              lastName={user.lastName}
            ></ProfileInfo>
          </div>
          <PostFeed
            username={paramsUsername?.toString()}
            postsToSee={"specificUser"}
          ></PostFeed>
          <div className="grow-0">
            <FollowerInfo username={user.username}></FollowerInfo>
          </div>
        </div>
      ) : loading ? (
        <div className="flex mt-30 justify-center">
          <div className="items-center text-5xl gap-2 flex-col p-8 whitespace-nowrap bg-white font-bold">
            Loading
          </div>
        </div>
      ) : (
        <div className="flex mt-30 justify-center">
          <div className="items-center text-5xl gap-2 flex-col p-8 whitespace-nowrap bg-white font-bold">
            Failed to find user
          </div>
        </div>
      )}
    </div>
  ) : (
    <NotSignedInError />
  )
}
