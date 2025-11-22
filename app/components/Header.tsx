"use client"

import Link from "next/link"
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
  useAuth,
} from "@clerk/nextjs"
import { useEffect } from "react"

// try and make this a server comp
const Header = () => {
  // If user auth'ed with clerk we need to add them to database via createAccount api
  const { userId } = useAuth()

  useEffect(() => {
    const fetchUser = async () => {
      // If not signed in with clerk then don't even try fetching or making account since no info given
      if (!userId) {
        return
      }
      const response = await fetch("/api/fetchUser", {
        method: "POST",
      })
      if (!response.ok) {
        await fetch("/api/createAccount", {
          method: "POST",
        })
      }
    }
    fetchUser()
  }, [userId])

  return (
    <div className="flex flex-wrap bg-white p-8 items-center justify-between">
      <div className="flex items-end">
        <div className="text-6xl">🗽</div>
        <div className="text-3xl text-emerald-700 font-bold ">Gratis</div>
        <div className="text-3xl font-bold ">Social</div>
      </div>
      <div className="flex gap-20 mr-40">
        <Link href={"/"}>
          <div className="text-2xl hover:scale-130 duration-300 font-bold">
            Home
          </div>
        </Link>
        <div className="flex gap-20 text-2xl font-bold">
          <SignedOut>
            <SignInButton>
              <div className="hover:cursor-pointer hover:scale-130 duration-300 ">
                Sign in
              </div>
            </SignInButton>
            <SignUpButton>
              <div className="hover:cursor-pointer hover:scale-130 duration-300 ">
                Sign up
              </div>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <Link href={"/my-account"}>
              <div className="hover:scale-130 duration-300 ">My account</div>
            </Link>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </div>
  )
}

export default Header
