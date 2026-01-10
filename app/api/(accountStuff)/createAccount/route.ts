import { reqWithAuthWrapper } from "@/lib/server/api"
import { prisma } from "@/prisma/prisma"
import { currentUser } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"

// This makes a new account entirely from info provided from clerk authentication
export const POST = reqWithAuthWrapper(async (_req, userId) => {
  // Get username and email from ClerkJS and make account in DB with that info
  const user = await currentUser()
  const primaryEmail = user?.emailAddresses.find(
    (email) => email.id === user.primaryEmailAddressId,
  )?.emailAddress
  const uniqueUsername = user?.username || ""
  const newUser = await prisma.user.create({
    data: {
      id: userId,
      email: primaryEmail || "",
      firstName: "placeholder",
      lastName: "placeholder",
      username: uniqueUsername,
    },
  })

  return NextResponse.json(newUser, { status: 201 })
})
