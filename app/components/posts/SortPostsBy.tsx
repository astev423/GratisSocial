import { Dispatch, SetStateAction, useState } from "react"

type SortPostProps = {
  setPostsToSee: Dispatch<SetStateAction<"All" | "Following" | "myPosts" | "specificUser">>
  postsToSee: string
}

export default function SortPostsBy({ setPostsToSee, postsToSee }: SortPostProps) {
  const [dropdownActive, setDropdownActive] = useState(false)
  const viewOption =
    "border-4 border-s-slate-950 hover:bg-gray-600 w-[10vw] rounded-2xl hover:cursor-pointer p-2 "

  return (
    <div className="relative h-25 flex justify-between items-center text-xl bg-white p-5 font-bold">
      <div>Sort posts by:</div>

      {/* Absolute dropdown right here which depends on the relative parent */}
      <div
        className={`absolute left-[25vw] flex flex-col rounded-2xl bg-gray-400 h-20 p-4 text-center gap-5
          text-2xl ${dropdownActive ? "h-40" : "h-10"}`}
      >
        <button
          onClick={() => {
            setDropdownActive(!dropdownActive)
          }}
          className={`${viewOption}`}
        >
          {postsToSee}
        </button>

        <div className={`flex flex-col gap-5 ${dropdownActive ? "" : "hidden"}`}>
          <button
            onClick={() => {
              postsToSee == "All" ? setPostsToSee("Following") : setPostsToSee("All")
              setDropdownActive(!dropdownActive)
            }}
            className={`${viewOption}`}
          >
            {postsToSee == "All" ? "Following" : "All"}
          </button>
        </div>
      </div>
    </div>
  )
}
