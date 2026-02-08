"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

async function geocodeAddress(address: string) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    throw new Error("Google API key is not set in the environment variables.");
  }

  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      address,
    )}&key=${apiKey}`,
  );
  if (!response.ok) {
    throw new Error("failed to fetch geocode data");
  }
  const data = await response.json();
  console.log("data", data);
  if (data.status !== "OK" || data.results.length === 0) {
    throw new Error("No, geocoding result found");
  }
  const { lat, lng } = data.results[0].geometry.location;
  console.log("latiture, logiture", lat, lng);
  return { lat, lng };
}

export const addLocationForTrip = async (
  formData: FormData,
  tripId: string,
) => {
  const address = formData.get("place")?.toString();

  if (!formData || !tripId || !address) {
    throw new Error("Essential field are missing!");
  }
  console.log("tripId", tripId, "place", address);
  const session = await auth();
  if (!session || !session.user) {
    throw new Error("login first");
  }

  const { lat, lng } = await geocodeAddress(address);

  //count the number of locations already added
  const count = await prisma.location.count({ where: { tripId } });
  await prisma.location.create({
    data: { locationTitle: address, lat, lng, tripId },
  });

  redirect(`/dashboard/${tripId}`);
  //   return console.log("finally got lat, lng", lat, lng);
};
