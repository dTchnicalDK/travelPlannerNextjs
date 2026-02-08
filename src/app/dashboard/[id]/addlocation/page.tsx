"use client";
import { addLocationForTrip } from "@/actions/addLocation";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useParams } from "next/navigation";
import React, { useTransition } from "react";

const AddLocationClient = () => {
  const [isPending, startTransition] = useTransition();
  const params = useParams();
  const id = params?.id;
  const tripId = Array.isArray(id) ? id[0] : id;

  return (
    <div className="flex h-[calc(100vh-50px)] w-full p-5 justify-center items-center  ">
      <div className="w-xl flex flex-col space-y-2 py-20 justify-center items-center  shadow-lg shadow-teal-400 rounded-2xl">
        <h1 className="text-xl font-bold text-orange-600 leading-relaxed">
          Add your trip location:{" "}
        </h1>
        <form
          action={(formData: FormData) => {
            if (!tripId) {
              return console.log("id is required");
            }
            startTransition(() => {
              addLocationForTrip(formData, tripId);
            });
          }}
          className="w-1/2 flex flex-col gap-2 py-5"
        >
          <div className="flex flex-col gap-2">
            <Label className="text-teal-600" htmlFor="place">
              Search your place of trip here!
            </Label>
            <input
              name="place"
              type="search"
              className=" px-5 py-2 border border-teal-400 rounded-lg focus:outline-none focus:shadow-lg focus:shadow-teal-400 focus:ring-3 focus:ring-teal-400/40 focus:text-teal-600"
            />
          </div>
          <Button type="submit" disabled={isPending} className="my-5">
            Search
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddLocationClient;
