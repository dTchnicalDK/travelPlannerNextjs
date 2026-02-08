import { fetchTripById } from "@/actions/fetchTrips";

export type TripWithLocations = Awaited<ReturnType<typeof fetchTripById>>;

export type TripWithLocationsNonNull = NonNullable<TripWithLocations>;
