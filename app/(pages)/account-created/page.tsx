import { tryAddClerkUserToDb } from "@/lib/server/dbQueries"

export default async function AccountCreatedPage() {
  tryAddClerkUserToDb()

  return (
    <>
      <h1 className="text-center text-5xl flex-col mt-20 font-bold">Account successfully created!</h1>
      <p className="text-2xl text-center mt-10">Enjoy your experience on an Open Source platform!</p>
    </>
  )
}
