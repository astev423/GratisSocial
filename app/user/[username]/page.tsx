"use client"
import FollowerInfo from "@/app/components/FollowerInfo"
import PostFeed from "@/app/components/PostFeed"
import ProfileInfo from "@/app/components/ProfileInfo"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

type User = {
  username: string
  firstName: string
  lastName: string
}

const defaultUser: User = {
  username: "temp",
  firstName: "temp",
  lastName: "temp",
}

// Page is based off unique username of user, similar to my-account page but cant be edited
export default function UserPage() {
  const params = useParams()
  const { username: paramsUsername } = params
  const [user, setUser] = useState<User>(defaultUser)
  const [foundUser, setFoundUser] = useState(false)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchUser = async () => {
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
    fetchUser()
  }, [])

  return (
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
          <PostFeed postsToSee={user.username}></PostFeed>
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
  )
}
