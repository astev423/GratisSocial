import { prisma } from "@/prisma/prisma";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest) {
  const { userId } = await auth();
  if (userId == null) {
    return NextResponse.json({ error: "User not signed in" }, { status: 400 });
  }

  const {username} = await req.json()
  const success = await prisma.user.update({
    where: {
      id:
    }
  })

}
