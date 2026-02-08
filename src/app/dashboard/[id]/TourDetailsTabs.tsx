"use client";
import GoogleMapView from "@/components/googleMap/GoogleMapView";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { Info, MapPin } from "lucide-react";
import { TripWithLocationsNonNull } from "@/types/tripsTypes";
import { getTime } from "date-fns";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type TourDetailsTabsProps = {
  trip: TripWithLocationsNonNull;
};

const TourDetailsTabs = ({ trip }: TourDetailsTabsProps) => {
  let duration =
    trip.startDate && trip.endDate
      ? Math.floor(
          (getTime(trip.endDate) - getTime(trip.startDate)) /
            (1000 * 60 * 60 * 24) +
            1,
        )
      : "Trip Date unknown";
  return (
    <div className="w-full">
      <Tabs defaultValue="overview" className="w-full">
        <TabsList>
          <TabsTrigger value="overview">OverView</TabsTrigger>
          <TabsTrigger value="sequence">Visiting sequence</TabsTrigger>
        </TabsList>
        {/* //////////////overview tab////////// */}
        <TabsContent value="overview">
          <div>
            <div className="flex gap-5">
              <Info className="mt-5" />
              <ul className="py-5">
                <li className="text-xl font-semibold font-serif text-teal-700">
                  Trip Title : {trip.title}
                </li>

                <div className="flex gap-3">
                  <span>Start Date: {trip.startDate.toLocaleDateString()}</span>
                  <span>End Date: {trip.endDate.toLocaleDateString()}</span>
                </div>
                <p>No. of Days: {duration}</p>
              </ul>
            </div>
            <div className="flex my-2 gap-3">
              <MapPin />
              <ol>
                <li>Total Locations : {trip.locations.length}</li>
                {trip.locations.length > 0 &&
                  trip.locations.map((location, index) => (
                    <li key={index}>
                      location {index + 1} : {location.locationTitle}
                    </li>
                  ))}
              </ol>
            </div>
            <Separator className="my-5" />
            <div className="w-full my-5 px-5  overflow-hidden">
              {trip.locations.length > 0 ? (
                <GoogleMapView tripLocations={trip} />
              ) : (
                <div className="flex flex-col justify-center items-center gap-5">
                  You haven't added any location yet!
                  <Link href={`/dashboard/${trip.id}/addlocation`}>
                    <Button> + Add Location</Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </TabsContent>
        <TabsContent value="sequence">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
};

export default TourDetailsTabs;
