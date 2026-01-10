import { reqWithAuthWrapper } from "@/lib/server/api"
import { prisma } from "@/prisma/prisma"
import { NextResponse } from "next/server"

type Names = {
  editableFirstName: string
  editableLastName: string
}

// Update first and last name
export const PUT = reqWithAuthWrapper(async (req, userId) => {
  const body = (await req.json()) as Names
  const { editableFirstName, editableLastName } = body
  if (editableFirstName.length > 20 || editableLastName.length > 20) {
    return NextResponse.json({ error: "Names too big!" }, { status: 404 })
  }

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
})
