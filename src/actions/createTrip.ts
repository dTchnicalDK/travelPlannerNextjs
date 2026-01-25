"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { Session } from "next-auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type Trips = {
  id: string;
  title: string;
  description: string;
  imageUrl: string | null;
  startDate: Date;
  endDate: Date;
  userId: string | null;
  createdAt: Date;
  updatedAt: Date;
};

/////////////////function to get all trips///////////////////
export const getAllTrips = async (
  session: Session,
): Promise<Trips[] | null | undefined> => {
  if (!session || !session.user) {
    console.log("not authorized, login first!");
    return null;
  }
  try {
    return prisma.trip.findMany({
      where: { userId: session.user.id },
      orderBy: { startDate: "asc" },
    });
  } catch (error) {
    if (error) {
      console.log("fetching trips error: ", error);
      return null;
    }
  }
};

////////////////////function to create new trip /////////////////////////
export const createNewTrip = async (formData: FormData) => {
  //checking if user logged in or not
  const session = await auth();
  if (!session || !session.user || !session.user.id) {
    throw new Error("Login first");
  }
  //validating data collected or not
  const title = formData.get("title")?.toString();
  const description = formData.get("description")?.toString();
  const rawStartDate = formData.get("startdate")?.toString();
  const rawEndDate = formData.get("enddate")?.toString();
  const imageUrl = formData.get("imageUrl")?.toString();

  if (!title || !description || !rawStartDate || !rawEndDate || !imageUrl) {
    throw new Error("all fields are mandatory");
  }
  //actually creating trip
  const startDate = new Date(rawStartDate);
  const endDate = new Date(rawEndDate);

  try {
    const createdTrip = await prisma.trip.create({
      data: {
        title,
        description,
        startDate,
        endDate,
        userId: session.user.id,
        imageUrl,
      },
    });
  } catch (error) {
    return console.log("creation error", error);
  }

  revalidatePath("/dashboard");
  redirect("/dashboard");
};
