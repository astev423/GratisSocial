"use client"

import { createContext, useContext, useState } from "react"
import type { User } from "@/types/types"

type ProviderProps = {
  viewedUser: User
  children: React.ReactNode
}

type ViewedUserContextValue = {
  viewedUser: User
  setViewedUser: React.Dispatch<React.SetStateAction<User>>
}

const ViewedUserContext = createContext<ViewedUserContextValue | null>(null)

export function ViewedUserProvider({ viewedUser, children }: ProviderProps) {
  const [userState, setUserState] = useState(viewedUser)

  return (
    <ViewedUserContext.Provider value={{ viewedUser: userState, setViewedUser: setUserState }}>
      {children}
    </ViewedUserContext.Provider>
  )
}

export function useViewedUser() {
  const ctx = useContext(ViewedUserContext)
  if (!ctx) {
    throw new Error("useViewedUser must be used within <ViewedUserProvider>")
  }
  return ctx
}
