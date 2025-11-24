import { auth } from '@clerk/nextjs/server';

import { prisma } from '@/lib/prisma';
import { createUser } from '@/lib/server/serverUtils';

import HeaderNav from './HeaderNav';
import SiteLogo from './SiteLogo';

export default async function Header() {
  // Check if we need to add user to the database
  async function fetchUser() {
    const { userId } = await auth();
    if (!userId) {
      return;
    }

    // If user signed in with clerk check DB if they exist, if not then make account for them
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (user == null) {
      createUser();
    }
  }

  fetchUser();

  return (
    <div className="flex flex-wrap bg-white p-8 items-center justify-between">
      <SiteLogo />
      <HeaderNav />
    </div>
  );
}
