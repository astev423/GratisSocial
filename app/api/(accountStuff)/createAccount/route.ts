import { reqWithAuthWrapper } from "@/lib/server/api"
import { tryAddClerkUserToDb } from "@/lib/server/dbQueries"
import { NextResponse } from "next/server"

// This makes a new account entirely from info provided from clerk authentication
export const POST = reqWithAuthWrapper(async (_req, userId) => {
  // Get username and email from ClerkJS and make account in DB with that info
  var success = await tryAddClerkUserToDb()
  if (!success) {
    return NextResponse.json({ status: 400 })
  }

  return NextResponse.json({ status: 201 })
})
