"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function SearchBar() {
  const [searchInput, setsearchInput] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push(`/user/${searchInput}`)
    setsearchInput("")
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 border-black border-3 rounded-xl pl-2 w-[14vw]">
      <Image src="/icons/search.svg" alt="Search" width={20} height={20} />
      <input
        className="placeholder:text-base text-base w-[10vw] outline-none"
        type="text"
        placeholder="Search for a user..."
        value={searchInput}
        onChange={(e) => setsearchInput(e.target.value)}
      />
    </form>
  )
}
