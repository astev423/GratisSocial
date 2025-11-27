"use client"

import type { User } from "@/types/types"
import { createContext, useContext } from "react"

type ProviderProps = {
  user: User
  children: React.ReactNode
}

const ViewedUserContext = createContext<User | null>(null)

export function ViewedUserProvider({ user, children }: ProviderProps) {
  return <ViewedUserContext.Provider value={user}>{children}</ViewedUserContext.Provider>
}

export function useViewedUser() {
  const ctx = useContext(ViewedUserContext)
  if (!ctx) {
    throw new Error("useViewedUser must be used within <UserProvider>")
  }

  return ctx
}
