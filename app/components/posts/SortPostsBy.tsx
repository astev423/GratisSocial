import { Dispatch, SetStateAction, useState } from "react"

type SortPostProps = {
  setPostsToSee: Dispatch<SetStateAction<"all" | "following" | "myPosts" | "specificUser">>
  postsToSee: string
}

export default function SortPostsBy({ setPostsToSee, postsToSee }: SortPostProps) {
  const [dropdownActive, setDropdownActive] = useState(false)
  const viewOption =
    "border-4 border-s-slate-950 hover:bg-gray-600 bg-gray-400 w-[10vw] rounded-2xl hover:cursor-pointer p-2 "

  return (
    <div className="h-25 flex justify-between items-center text-xl bg-white p-5 font-bold">
      <div>Sort posts by:</div>
      <div
        className={`left-[25vw] flex flex-col rounded-2xl text-center gap-5
          text-2xl ${dropdownActive ? "border-3 bg-gray-500 p-2" : "bg-gray-400 "}`}
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
              postsToSee == "all" ? setPostsToSee("following") : setPostsToSee("all")
              setDropdownActive(!dropdownActive)
            }}
            className={`${viewOption}`}
          >
            {postsToSee == "all" ? "following" : "all"}
          </button>
        </div>
      </div>
    </div>
  )
}
