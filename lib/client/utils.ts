"use client"

import { useEffect, useState } from "react"
import type { Comment, LikeInteraction } from "@/types/types"

type FetchState<T> = {
  data: T | null
  loading: boolean
  error: Error | null
}

// Hooks are scoped to their function instance, so we can reuse this without worrying about interference
// This component returns null initially but then re-renders with updated values so const {}
// properties will be updated
export function useFetch<T = unknown>(
  route: string,
  method: "GET" | "POST" | "PUT" | "DELETE" = "GET",
  refetchKey: number = 0,
  body?: {},
): FetchState<T> {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    setLoading(true)
    setError(null)
    // Abort controller is important here, it cancels the request if something gets unmounted, as
    // useEffect return runs whenever dependancy array changes, OR IF COMPONENT DISMOUNTS
    // so if we dismount, we don't want the request response, we just want to cancel it, since
    // were no longer on the component which needs the data
    const controller = new AbortController()
    const { signal } = controller

    async function fetchData() {
      try {
        const req: RequestInit =
          method != "GET"
            ? {
                method: method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
                signal,
              }
            : { signal }

        const res = await fetch(route, req)
        if (!res.ok) {
          throw new Error(`Request failed with status ${res.status}`)
        }

        const json = (await res.json()) as T
        setData(json)
      } catch (err: any) {
        // If aborted then don't treat as normal error, just return
        if (err?.name === "AbortError") {
          return
        }

        setError(err instanceof Error ? err : new Error(String(err)))
        setData(null)
      } finally {
        if (!signal.aborted) {
          setLoading(false)
        }
      }
    }

    fetchData()
    return () => {
      controller.abort()
    }
  }, [refetchKey])

  return { data, loading, error }
}

export async function followUser(username: string) {
  return fetch("/api/followUser", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username }),
  })
}

export async function unfollowUser(username: string) {
  return fetch("/api/unfollowUser", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username }),
  })
}

export async function createComment(commentContent: string, postId: string) {
  return fetch("/api/createComment", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ commentContent, postId }),
  })
}

export async function fetchComments(postId: string) {
  const res = await fetch("/api/fetchComments", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ postId }),
  })

  return res.json() as Promise<Comment[]>
}

export async function likeOrDislikeInteraction({
  postId,
  interaction,
}: {
  postId: string
  interaction: LikeInteraction
}) {
  return fetch("/api/likeOrDislikeInteraction", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ postId, interaction }),
  })
}

export async function updateAccount<T extends object>(newInfo: T) {
  return fetch("/api/updateAccount", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newInfo),
  })
}

export async function deletePost(postId: string) {
  return fetch("/api/deletePost", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ postId }),
  })
}

export async function createPost<T extends object>(postContents: T) {
  return fetch("/api/createPost", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postContents),
  })
}
