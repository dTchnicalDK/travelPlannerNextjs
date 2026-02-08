// "use client";
import { fetchTripById } from "@/actions/fetchTrips";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import TourDetailsTabs from "./TourDetailsTabs";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const TourDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  console.log("paramsId", id);
  const trip = await fetchTripById(id);
  // console.log("full tript", trip);

  return (
    <div className="flex flex-col gap-3 items-center py-5">
      <Card className="py-5 mt-5 w-10/12">
        <CardContent>
          <div className="flex justify-center items-center">
            <img
              src={trip?.imageUrl || "/globe.svg"}
              alt="tour image"
              // sizes="25"
              className="bg-cover rounded-2xl min-w-full"
            />
          </div>
          {/* </CardContent> */}
          {trip?.startDate && (
            <div className="py-3">
              <h1 className="text-2xl font-extrabold text-teal-700">
                {trip?.title}
              </h1>
              <div className="flex justify-between items-center  gap-2 text-gray-600">
                <div className="flex gap-2 items-center">
                  <Calendar />
                  <span>
                    from: {(trip?.startDate).toLocaleDateString()} to{" "}
                    {trip.endDate.toLocaleDateString()}
                  </span>
                </div>
                <Link href={`/dashboard/${trip.id}/addlocation`}>
                  <Button> + Add Location</Button>
                </Link>
              </div>

              {/* ////card tab section */}
              <div className="container my-5 ">
                {/* <h2>Details</h2> */}
                <Card className="px-5">
                  <CardTitle>Your Trips details here</CardTitle>

                  <div className="w-full">
                    {trip ? (
                      <TourDetailsTabs trip={trip} />
                    ) : (
                      "no trip data found!"
                    )}
                  </div>
                </Card>
              </div>
            </div>
          )}
        </CardContent>
        <CardDescription className="px-5">{trip?.description}</CardDescription>
      </Card>
    </div>
  );
};

export default TourDetails;
