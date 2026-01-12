import { reqWithAuthWrapper } from "@/lib/server/api"
import {
  fetchAllPosts,
  fetchAllPostsByPeopleUserFollows,
  fetchAllPostsFromUserViaTheirId,
  fetchAllPostsFromUserViaTheirUsername,
} from "@/lib/server/dbQueries"
import { NextResponse } from "next/server"

// Get specified posts
export const GET = reqWithAuthWrapper(async (req, userId) => {
  const { searchParams } = new URL(req.url)
  const type = searchParams.get("type")
  const username = searchParams.get("username")

  if (!userId || !type) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  if (type === "Following") {
    const followedPosts = await fetchAllPostsByPeopleUserFollows(userId)

    return NextResponse.json(followedPosts, { status: 200 })
  } else if (type === "All") {
    const allPosts = await fetchAllPosts()

    return NextResponse.json(allPosts, { status: 200 })
  } else if (type === "myPosts") {
    const userPosts = await fetchAllPostsFromUserViaTheirId(userId)

    return NextResponse.json(userPosts, { status: 200 })
  } else if (type == "specificUser") {
    if (!username) {
      return NextResponse.json(
        { error: "Can't fetch info for specific user if no username provided" },
        { status: 401 },
      )
    }
    const userPosts = await fetchAllPostsFromUserViaTheirUsername(username)

    return NextResponse.json(userPosts, { status: 200 })
  }

  // If no if statements activated then request failed
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
})
