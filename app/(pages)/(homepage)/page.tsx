import { auth } from "@clerk/nextjs/server"

import NotSignedInError from "../../components/errors/NotSignedInError"
import FeedContainer from "../../components/posts/FeedContainer"

export default async function Home() {
  const { userId } = await auth()

  if (userId == null) {
    return <NotSignedInError />
  }

  return <FeedContainer />
}
