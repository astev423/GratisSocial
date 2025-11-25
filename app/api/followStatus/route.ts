import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { userId } = await auth();
  if (userId == null) {
    return NextResponse.json({ error: "User not signed in" }, { status: 400 });
  }

  return NextResponse.json({ followStatus: "Following" }, { status: 200 });
}
