import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import React from "react";
import { EventCard } from "./EventCard";
import Link from "next/link";

const DashboardPage = async () => {
  const session = await auth();
  const tours: Array<string> = []; //temp
  return (
    <div className="min-h-full py-10 px-5 ">
      {session?.user ? (
        <h1 className="text-2xl text-center font-bold flex justify-center gap-2">
          Welcome Mr./Mrs.
          <p className="italic text-3xl text-teal-500">{session?.user?.name}</p>
        </h1>
      ) : (
        <h1 className="text-2xl text-center font-bold">Welcome Guest!</h1>
      )}

      <div className="content">
        <div className="flex justify-end">
          <Link href="dashboard/add-new">
            <Button className="bg-teal-700 hover:bg-teal-900 cursor-pointer dark:bg-gray-700 dark:hover:bg-gray-900">
              +add new Tour
            </Button>
          </Link>
        </div>
        {tours.length >= 1 ? (
          <div>
            <h1 className="text-2xl my-3">your upcoming tours are :-</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
              <EventCard />
            </div>
          </div>
        ) : (
          <div className="w-full min-h-50 flex flex-col justify-center items-center">
            <h1>OOfs! You haven't created any Tour yet</h1>
            <Link href="dashboard/add-new">
              {" "}
              <h1 className="text-2xl py-10 underline">+ Plan New tour now</h1>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
