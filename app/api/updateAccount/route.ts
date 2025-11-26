import { prisma } from "@/prisma/prisma"
import { auth } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"

type Names = {
  requestedFirstName: string
  requestedLastName: string
}

// Update first and last name
export async function PUT(request: Request) {
  const { userId } = await auth()
  if (!userId) {
    return NextResponse.json({ error: "User not found" }, { status: 404 })
  }

  const body = (await request.json()) as Names
  const { requestedFirstName, requestedLastName } = body
  if (requestedFirstName.length > 20 || requestedLastName.length > 20) {
    return NextResponse.json({ error: "Names too big!" }, { status: 404 })
  }

  await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      firstName: requestedFirstName,
      lastName: requestedLastName,
    },
  })

  return NextResponse.json({ status: 200 })
}
