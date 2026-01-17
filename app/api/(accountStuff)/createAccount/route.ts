import { reqWithAuthWrapper } from "@/lib/server/api"
import { tryAddClerkUserToDb } from "@/lib/server/dbQueries"
import { NextResponse } from "next/server"

// User signs in with clerk, but we still need to add that clerk account info to our db here
export const POST = reqWithAuthWrapper(async (_req, userId) => {
  var success = await tryAddClerkUserToDb()
  if (!success) {
    return NextResponse.json({ status: 400 })
  }

  return NextResponse.json({ status: 201 })
})
