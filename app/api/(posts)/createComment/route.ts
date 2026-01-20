import { createCommentOnPost, updatePost } from "@/lib/server/dbQueries";
import { currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const user = await currentUser();
  const { commentContent, postId } = (await req.json()) as { commentContent: string; postId: string };
  console.log(commentContent, postId);
  if (user == null || user.username == null || commentContent == null || postId == null) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await createCommentOnPost(postId, commentContent, user.username);
  await updatePost(postId, { commentCount: { increment: 1 } });

  return NextResponse.json({ status: 200 });
}
