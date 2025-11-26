export default function FailedToFindUser() {
  return (
    <div className="flex mt-20 justify-center">
      <div className="items-center text-center text-5xl flex-col p-22 max-w-6xl bg-white font-bold">
        Failed to find user
        <div className="text-2xl text-center font-normal mt-7">
          Make sure you entered the user's name correctly
        </div>
      </div>
    </div>
  )
}
