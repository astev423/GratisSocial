import { auth } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

// Update first and last name
export async function PUT(request: Request) {
  const { userId } = await auth()
  if (!userId) {
    return NextResponse.json({ error: "User not found" }, { status: 404 })
  }

  const body = await request.json()
  const { editableFirstName, editableLastName } = body
  await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      firstName: editableFirstName,
      lastName: editableLastName,
    },
  })

  return NextResponse.json({ status: 200 })
}
