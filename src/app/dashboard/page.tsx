import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import React from "react";
import { EventCard } from "./EventCard";
import Link from "next/link";
import { getAllTrips, Trips } from "@/actions/createTrip";

const DashboardPage = async () => {
  const session = await auth();

  ////function to sort upcoming and past tourt
  let tours: Trips[] = [];
  let upcomingTrips: Trips[] = [];
  let PastTrips: Trips[] = [];

  if (session && session.user) {
    const tripResponse = await getAllTrips(session); //fetching all trips already created
    if (tripResponse && Array.isArray(tripResponse)) {
      // tours = tripResponse;
      tours = tripResponse.sort((a: Trips, b: Trips) => {
        return (
          new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
        );
      });
    }

    if (tours && tours.length > 0) {
      let today = new Date();
      today.setHours(0, 0, 0, 0);

      tours.forEach((trip) => {
        if (trip.startDate > today) {
          upcomingTrips.push(trip);
        } else {
          PastTrips.push(trip);
        }
      });
    }
  }

  // const tours: Array<string> = []; //temp
  return (
    <div className="min-h-full py-10 px-5 ">
      {/* ////////title and add new trip section */}
      {session?.user ? (
        <h1 className="text-2xl text-center font-bold flex justify-center gap-2">
          Welcome Mr./Mrs.
          <p className="italic text-3xl text-teal-500">{session?.user?.name}</p>
        </h1>
      ) : (
        <h1 className="text-2xl text-center font-bold">Welcome Guest!</h1>
      )}

      {/* //////////////tour section//////// */}
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
              {`you have ${tours.length} trips, ${upcomingTrips.length} tours are upcoming! :-`}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {upcomingTrips.map((tour) => (
                <EventCard key={tour.id} tour={tour} />
              ))}
            </div>

            {/* ////Already visited/past trips */}
            <div>
              <h1 className="text-2xl my-3 text-gray-500">
                {`Congratulations! for your ${PastTrips.length} last trip you already visited:-`}
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {PastTrips.map((tour) => (
                  <EventCard key={tour.id} tour={tour} />
                ))}
              </div>
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
