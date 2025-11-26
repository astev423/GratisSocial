import Link from "next/link"

import { UserButton } from "@clerk/nextjs"

export default function SignedInNav() {
  return (
    <div className="flex gap-20 ">
      <Link href={"/my-account"}>
        <div className="clickable-scale-animation">My account</div>
      </Link>
      {/* UserButton takes time to load so fill its space in so layout doesn't shift */}
      <div className="min-w-9 min-h-9">
        <UserButton />
      </div>
    </div>
  )
}
