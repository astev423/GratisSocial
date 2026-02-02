"use client"

import { useEffect, useState } from "react"
import type { Comment, HttpMethod, LikeInteraction } from "@/types/types"

export async function sendFetchReq(
  route: string,
  method: HttpMethod = "GET",
  body?: Record<string, unknown>,
  signal?: AbortSignal,
) {
  const req: RequestInit = { method, signal }

  if (method !== "GET" && body !== undefined) {
    req.headers = { "Content-Type": "application/json" }
    req.body = JSON.stringify(body)
  }

  const res = await fetch(route, req)
  if (!res.ok) {
    throw new Error(`sendFetchReq failed with status ${res.status}`)
  }

  return res
}

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
  method: HttpMethod,
  refetchKey: number = 0,
  body?: Record<string, unknown>,
): FetchState<T> {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

  // biome-ignore lint/correctness/useExhaustiveDependencies: refetchKey is an explicit refetch trigger
  useEffect(() => {
    const controller = new AbortController()
    setLoading(true)
    setError(null)
    ;(async () => {
      try {
        const res = await sendFetchReq(route, method, body, controller.signal)
        const json = (await res.json()) as T
        setData(json)
      } catch (err: unknown) {
        if (err instanceof DOMException && err.name === "AbortError") {
          return
        }

        setError(err instanceof Error ? err : new Error(String(err)))
        setData(null)
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false)
        }
      }
    })()

    return () => controller.abort()
  }, [refetchKey])

  return { data, loading, error }
}

export async function followUser(username: string) {
  return sendFetchReq("/api/followUser", "PUT", { username })
}

export async function unfollowUser(username: string) {
  return sendFetchReq("/api/unfollowUser", "PUT", { username })
}

export async function createComment(commentContent: string, postId: string) {
  return sendFetchReq("/api/createComment", "POST", { commentContent, postId })
}

export async function fetchComments(postId: string) {
  const res = await sendFetchReq(`/api/fetchComments/${encodeURIComponent(postId)}`, "GET")

  return res.json() as Promise<Comment[]>
}

export async function likeOrDislikeInteraction({
  postId,
  interaction,
}: {
  postId: string
  interaction: LikeInteraction
}) {
  return sendFetchReq("/api/likeOrDislikeInteraction", "PUT", { postId, interaction })
}

export async function updateAccount(newInfo: Record<string, unknown>) {
  return sendFetchReq("/api/updateAccount", "PUT", newInfo)
}

export async function deletePost(postId: string) {
  return sendFetchReq("/api/deletePost", "DELETE", { postId })
}

export async function createPost(postContents: Record<string, unknown>) {
  return sendFetchReq("/api/createPost", "POST", postContents as Record<string, unknown>)
}
