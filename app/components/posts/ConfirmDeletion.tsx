"use client"

import { deletePost } from "@/lib/client/utils"
import { Dispatch, SetStateAction } from "react"

type ConfirmProps = {
  confirmObject: {
    setShowConfirmation: Dispatch<SetStateAction<boolean>>
    postId: string
    refetch: Dispatch<SetStateAction<number>>
  }
}

export default function ConfirmDeletion({ confirmObject }: ConfirmProps) {
  const { postId, refetch, setShowConfirmation } = confirmObject

  async function tryDeletePost() {
    try {
      await deletePost(postId)
      refetch((i) => i + 1)
      setShowConfirmation(false)
    } catch {
      alert("Error while deleting post")
    }
  }

  return (
    <div className="fixed inset-0 z-9999" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="w-full max-w-sm rounded-lg bg-white p-4 shadow-lg">
          <h2 className="text-lg font-semibold">Are you sure?</h2>
          <p className="mt-2 text-sm text-gray-600">This action cannot be undone.</p>
          <div className="mt-4 flex justify-end gap-2">
            <button
              onClick={() => setShowConfirmation(false)}
              className="rounded border px-3 py-2 text-sm hover:scale-110 hover:bg-gray-400 hover:cursor-pointer "
            >
              Cancel
            </button>
            <button
              onClick={tryDeletePost}
              className="rounded bg-red-600 px-3 py-2 text-sm text-white hover:scale-110 hover:cursor-pointer hover:bg-red-900"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
