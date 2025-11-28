import { prisma } from '@/prisma/prisma'
import { auth } from '@clerk/nextjs/server'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { userId } = await auth()
  if (userId == null) {
    return NextResponse.json({ error: 'User not signed in' }, { status: 400 })
  }

  // Find the users to check if viewer if following that user
  const { username: cardUsername } = await req.json()
  const cardUser = await prisma.user.findUnique({
    where: { username: cardUsername },
  })
  const viewingUser = await prisma.user.findUnique({ where: { id: userId } })
  if (!cardUser || !viewingUser) {
    return NextResponse.json({ error: "Can't find users" }, { status: 400 })
  }

  const viewerFollowsCardUser = await prisma.follow.findFirst({
    where: { personFollowedId: cardUser.id, followerId: viewingUser.id },
  })

  if (!viewerFollowsCardUser) {
    return NextResponse.json({ followStatus: 'Not Following' }, { status: 200 })
  }

  return NextResponse.json({ followStatus: 'Following' }, { status: 200 })
}
