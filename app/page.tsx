import { auth } from "@clerk/nextjs/server"
import FeedContainer from "./components/FeedContainer"

export default async function Home() {
  const { userId } = await auth()

  return (
    <div>
      {userId != null ? (
        // useState needs to be on client component to feedcontainer was made and auth is done here
        <FeedContainer />
      ) : (
        <div className="center-menu flex flex-col items-center justify-center gap-15 mt-20">
          <div className="font-bold">
            You must sign in to see and create posts
          </div>
        </div>
      )}
    </div>
  )
}
