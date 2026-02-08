import { Trips } from "@/actions/createTrip";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Link from "next/link";

type EventCardProps = {
  tour: Trips;
};

export function EventCard({ tour }: EventCardProps) {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0 bg-white hover:shadow-xl hover:translate-y-1">
      <div className="absolute inset-0 z-30 aspect-video" />
      <img
        src={tour.imageUrl || "https://avatar.vercel.sh/shadcn1"}
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover grayscale-75 dark:brightness-40"
      />
      <CardHeader>
        {/* <CardAction>
          <Badge variant="default" className="bg-teal-500 text-amber-100">
            Featured
          </Badge>
        </CardAction> */}
        <CardTitle className="text-orange-600 capitalize font-serif line-clamp-1">
          {tour.title}
        </CardTitle>
        <CardDescription className="min-w-full">
          {tour.description}
        </CardDescription>
        <div className="container min-w-full  flex justify-between items-center gap-5">
          <div className="flex gap-1">
            <Label>Starts On</Label>
            <Badge className="bg-teal-500 text-amber-100">
              {tour.startDate.toLocaleDateString()}
            </Badge>
          </div>
          <div className="flex gap-1">
            <Label>Ends On</Label>
            <Badge className="bg-teal-500 text-amber-100">
              {tour.endDate.toLocaleDateString()}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardFooter className="w-full flex justify-center items-center ">
        <Link href={`dashboard/${tour.id}`}>
          <Button variant="default">View Event</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
