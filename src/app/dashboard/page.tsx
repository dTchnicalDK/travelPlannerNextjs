import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import React from "react";
import { EventCard } from "./EventCard";
import Link from "next/link";
import { getAllTrips, Trips } from "@/actions/createTrip";

const DashboardPage = async () => {
  const session = await auth();

  let tours: Trips[] = [];
  //getting all trips already created
  if (session && session.user) {
    const result = await getAllTrips(session);
    if (result) {
      tours = result;
    }
  }
  // const tours: Array<string> = []; //temp
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
        {tours && tours.length >= 1 ? (
          <div>
            <h1 className="text-2xl my-3">
              `you have ${tours.length} trips, 3 tours are upcoming! :-`
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
              {tours.map((tour) => (
                <EventCard key={tour.id} tour={tour} />
              ))}
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
