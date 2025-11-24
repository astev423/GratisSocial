import Link from 'next/link';

import { UserButton } from '@clerk/nextjs';

export default function SignedInNav() {
  const scaleItemAnimation = 'hover:scale-130 duration-300 hover:cursor-pointer';

  return (
    <div className="flex gap-20 ">
      <Link href={'/my-account'}>
        <div className={scaleItemAnimation}>My account</div>
      </Link>
      <UserButton />
    </div>
  );
}
