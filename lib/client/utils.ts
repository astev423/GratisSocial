"use client"

import { FollowInfo } from "@/types/types"
import { useEffect, useState } from "react"

type FetchState<T> = {
  data: T | null
  loading: boolean
  error: Error | null
}

// Hooks are scoped to their function instance, so we can reuse this without worrying about interference
// This component returns null initially but then re-renders with updated values so const {}
// properties will be updated
export function useFetch<T = unknown>(route: string, body?: unknown): FetchState<T> {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    setLoading(true)
    setError(null)

    async function fetchData() {
      try {
        const options =
          body !== undefined
            ? {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
              }
            : undefined

        const res = await fetch(route, options)

        if (!res.ok) {
          throw new Error(`Request failed with status ${res.status}`)
        }

        const json = (await res.json()) as T
        setData(json)
      } catch (err: any) {
        setError(err instanceof Error ? err : new Error(String(err)))
        setData(null)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [route, JSON.stringify(body)])

  return { data, loading, error }
}

export async function fetchFollowCount(username: string) {
  const res = await fetch("/api/fetchFollowCount", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username }),
  })
  if (!res.ok) {
    return null
  }

  return res.json() as Promise<FollowInfo>
}

export async function followUser(username: string) {
  const res = await fetch("/api/followUser", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username }),
  })
  if (!res.ok) {
    return false
  }

  return true
}

export async function unfollowUser(username: string): Promise<boolean> {
  const res = await fetch("/api/unfollowUser", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username }),
  })
  if (!res.ok) {
    return false
  }

  return true
}

export async function createComment(content: string, postId: string): Promise<boolean> {
  const res = await fetch("/api/createComment", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content, postId }),
  })
  if (!res.ok) {
    return false
  }

  return true
}

type interactionProps = {
  postId: string
  interaction: "like" | "dislike" | "removeLike" | "removeDislike"
}

export async function likeOrDislikeInteraction({ postId, interaction }: interactionProps) {
  const res = await fetch("/api/likeOrDislikeInteraction", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ postId, interaction }),
  })
  if (!res.ok) {
    return false
  }

  return true
}
