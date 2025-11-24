import { auth } from "@clerk/nextjs/server";

import { prisma } from "@/lib/prisma";
import { createUser } from "@/lib/server/dbQueries";

import HeaderNav from "./HeaderNav";
import SiteLogo from "./SiteLogo";

export default async function Header() {
  // Clerk doesn't auto add user to the DB so we must manually check if user needs to be added
  async function addClerkUserToDb() {
    const { userId } = await auth();
    // Only add them if they signed in with clerk
    if (!userId) {
      return;
    }

    // If user signed in then check DB if they exist, if not then make account for them
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (user == null) {
      createUser();
    }
  }

  addClerkUserToDb();

  return (
    <div className="flex flex-wrap bg-white p-8 items-center justify-between">
      <SiteLogo />
      <HeaderNav />
    </div>
  );
}
