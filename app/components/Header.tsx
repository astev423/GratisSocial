import Link from 'next/link';

import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';

import { prisma } from '@/lib/prisma';
import { createUser } from '@/lib/server/serverUtils';

export default async function Header() {
  // If user auth'ed with clerk we need to add them to database via createAccount api
  const { userId } = await auth();

  async function fetchUser() {
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
      <div className="flex items-end">
        <div className="text-6xl">🗽</div>
        <div className="text-3xl text-emerald-700 font-bold ">Gratis</div>
        <div className="text-3xl font-bold ">Social</div>
      </div>
      <div className="flex gap-20 mr-40">
        <Link href={'/'}>
          <div className="text-2xl hover:scale-130 duration-300 font-bold">Home</div>
        </Link>
        <div className="flex gap-20 text-2xl font-bold">
          <SignedOut>
            <SignInButton>
              <div className="hover:cursor-pointer hover:scale-130 duration-300 ">Sign in</div>
            </SignInButton>
            <SignUpButton>
              <div className="hover:cursor-pointer hover:scale-130 duration-300 ">Sign up</div>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <Link href={'/my-account'}>
              <div className="hover:scale-130 duration-300 ">My account</div>
            </Link>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </div>
  );
}
