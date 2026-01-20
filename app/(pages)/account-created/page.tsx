import { tryAddClerkUserToDb } from "@/lib/server/dbQueries";

export default async function AccountCreatedPage() {
  tryAddClerkUserToDb();

  return (
    <div className="flex mt-20 justify-center">
      <div className="items-center text-5xl flex-col p-22 max-w-6xl bg-white font-bold">
        Account successfully created!
        <div className="text-2xl text-center font-normal mt-5">
          Enjoy your experience on an Open Source platform!
        </div>
      </div>
    </div>
  );
}
