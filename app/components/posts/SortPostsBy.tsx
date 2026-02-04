import { type Dispatch, type SetStateAction, useState } from "react"
import type { TypeOfPostToView } from "@/types/types"

type SortPostProps = {
  setPostsToSee: Dispatch<SetStateAction<TypeOfPostToView>>
  setRefreshKey: Dispatch<SetStateAction<number>>
  postsToSee: string
}

export default function SortPostsBy({ setPostsToSee, setRefreshKey, postsToSee }: SortPostProps) {
  const [dropdownActive, setDropdownActive] = useState(false)
  const viewOption =
    "border-4 border-s-slate-950 hover:bg-gray-600 bg-gray-400 w-[10vw] rounded-2xl hover:cursor-pointer p-2 "

  // TODO: Cleanup how this works, figure out how to get last div absolutely positioned
  return (
    <div className="flex justify-between items-center bg-white p-5 font-bold">
      <h2 className="text-xl">Sort posts by:</h2>

      <div
        className={`left-[25vw] flex flex-col rounded-2xl text-center gap-5
          text-2xl ${dropdownActive ? "border-3 bg-gray-500 p-2" : "bg-gray-400 "}`}
      >
        <button
          type="button"
          onClick={() => {
            setDropdownActive(!dropdownActive)
          }}
          className={`${viewOption}`}
        >
          {postsToSee}
        </button>

        <div className={`flex flex-col gap-5 ${dropdownActive ? "" : "hidden"}`}>
          <button
            type="button"
            onClick={() => {
              postsToSee === "all" ? setPostsToSee("following") : setPostsToSee("all")
              setRefreshKey((i) => i + 1)
              setDropdownActive(!dropdownActive)
            }}
            className={`${viewOption}`}
          >
            {postsToSee === "all" ? "following" : "all"}
          </button>
        </div>
      </div>
    </div>
  )
}
