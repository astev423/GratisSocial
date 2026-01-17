import { tryFetchUserByTheirId, tryFetchUserByUsername } from "@/lib/server/dbQueries"
import { NextResponse } from "next/server"

export async function POST() {
  const user = await tryFetchUserByTheirId()
  if (!user) {
    return NextResponse.json({ error: "User not found in database" }, { status: 400 })
  }

  const { username, firstName, lastName } = user
  const userObjectWithoutSensitiveInfo = { username, firstName, lastName }
  return NextResponse.json(userObjectWithoutSensitiveInfo, { status: 200 })
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const usernameFromParams = searchParams.get("username")
  if (!usernameFromParams) {
    return NextResponse.json({ error: "Couldn't find username in serach params" }, { status: 400 })
  }

  const user = await tryFetchUserByUsername(usernameFromParams)
  if (!user) {
    return NextResponse.json({ error: "Username not found in DB" }, { status: 400 })
  }

  const { username, firstName, lastName } = user
  const userObjectWithoutSensitiveInfo = { username, firstName, lastName }
  return NextResponse.json(userObjectWithoutSensitiveInfo, { status: 200 })
}
