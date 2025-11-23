import { auth } from "@clerk/nextjs/server"
import FeedContainer from "./components/posts/FeedContainer"
import NotSignedInError from "./components/NotSignedInError"

export default async function Home() {
  const { userId } = await auth()

  return (
    <div>
      {userId != null ? (
        // useState needs to be on client component to feedcontainer was made and auth is done here
        <FeedContainer />
      ) : (
        <NotSignedInError />
      )}
    </div>
  )
}
