import { auth } from "@clerk/nextjs/server"

import NotSignedInError from "../../components/errors/NotSignedInError"
import HomepagePostStuff from "../../components/posts/HomepagePostStuff"

export default async function Home() {
  const { userId } = await auth()

  if (userId === null) {
    return <NotSignedInError />
  }

  return (
    <div className="flex justify-center">
      <HomepagePostStuff />
    </div>
  )
}
