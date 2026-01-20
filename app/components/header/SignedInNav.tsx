import { UserButton } from "@clerk/nextjs"
import Link from "next/link"
import SearchBar from "./SearchBar"

export default function SignedInNav() {
  return (
    <div className="flex gap-20 ">
      <Link href={"/my-account"}>
        <div className="clickable-scale-animation">My account</div>
      </Link>
      <SearchBar />
      <div className="min-w-9 min-h-9">
        <UserButton />
      </div>
    </div>
  )
}
