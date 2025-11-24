import Link from 'next/link';

import { SignedIn, SignedOut } from '@clerk/nextjs';

import SignedInNav from './SignedInNav';
import SignedOutNav from './SignedOutNav';

export default function HeaderNav() {
  const scaleItemAnimation = 'hover:scale-130 duration-300 hover:cursor-pointer';

  return (
    <nav>
      <div className="flex text-2xl gap-20 mr-40 font-bold ">
        <Link href={'/'}>
          <div className={scaleItemAnimation}>Home</div>
        </Link>
        <div>
          {/* Only one nav shown depending on if user is logged in/out  */}
          <SignedIn>
            <SignedInNav />
          </SignedIn>

          <SignedOut>
            <SignedOutNav />
          </SignedOut>
        </div>
      </div>
    </nav>
  );
}
