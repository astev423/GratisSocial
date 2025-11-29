import { NextResponse } from "next/server"

import { prisma } from "@/prisma/prisma"
import { auth } from "@clerk/nextjs/server"

// Get user from their ID in POST request, only call this from SERVER as users can fake their ID
export async function POST(req: Request) {
  const { userId } = await auth()
  if (userId == null) {
    return NextResponse.json({ status: 400 })
  }

  const { postId } = await req.json()
  const likeInfo = await prisma.like.findFirst({
    where: {
      postId: postId,
      likerId: userId,
    },
  })
  const likeStatus = likeInfo?.liked
  if (likeStatus) {
    return NextResponse.json({ status: "liked" }, { status: 200 })
  } else if (likeStatus == undefined) {
    return NextResponse.json({ status: "neither" }, { status: 200 })
  } else {
    return NextResponse.json({ status: "disliked" }, { status: 200 })
  }
}
