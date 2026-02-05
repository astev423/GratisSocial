export default function FailedToFindUser() {
  return (
    <div className="flex mt-20 justify-center">
      <h2 className="items-center text-center text-5xl flex-col p-22 max-w-6xl bg-white font-bold">
        Failed to find user
        <p className="text-2xl text-center font-normal mt-7">
          You must type in the username exactly as it's spelled.
          <br></br>
          No extra spaces and case sensitivity required.
        </p>
      </h2>
    </div>
  )
}
