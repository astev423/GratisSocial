"use client"
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
  const { paramsUsername } = params
  const [user, setUser] = useState<User>(defaultUser)
  const [foundUser, setFoundUser] = useState(false)
  useEffect(() => {
    const fetchAccountInfo = async () => {
      try {
        const response = await fetch(
          `/api/fetchUser?username=${paramsUsername}`
        )
        if (response.ok) {
          const data: User = await response.json()
          // data is the whole json object for all user data. even userid and other stuff
          const { username, firstName, lastName } = data
          setUser({
            username: username,
            firstName: firstName,
            lastName: lastName,
          })
          setFoundUser(true)
        }
      } catch (error) {
        alert(`Network issue occured ${error}`)
      }
    }
    fetchAccountInfo()
  }, [paramsUsername])
  return (
    <div>
      {foundUser ? (
        <div className="flex m-20 gap-20">
          <ProfileInfo></ProfileInfo>
          <PostFeed postsToSee={user.username}></PostFeed>
        </div>
      ) : (
        <div className="flex ">
          <div className="font-black text-6xl p-20">Failed to find user</div>
        </div>
      )}
    </div>
  )
}
