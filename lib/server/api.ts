import { auth } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"

// This returns a function because we want to assign it to a function
// We pass in the function we want, then it returns function that returns if we dont have userid,
// otherwise it simply runs the function we gave it
export function reqWithAuthWrapper(handler: (req: Request, userId: string) => Promise<Response>) {
  return async (req: Request) => {
    const { userId } = await auth()
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // This runs the function with userId it found and returns the result
    return handler(req, userId)
  }
}
