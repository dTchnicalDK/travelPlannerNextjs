"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export const fetchTripById = async (tripId: string) => {
  //verify if logged in
  const session = await auth();
  if (!session || !session.user) {
    throw new Error("login first");
  }
  //checking for tripid
  if (!tripId) {
    throw new Error("no trip id found");
  }

  try {
    const fetchedTrip = await prisma.trip.findUnique({
      where: { id: tripId },
      include: { locations: true },
    });
    return fetchedTrip;
  } catch (error) {
    console.log("fetching eroor:", error);
    return null;
  }
};
