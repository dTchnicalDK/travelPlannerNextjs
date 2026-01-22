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

export function EventCard() {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <img
        src="https://avatar.vercel.sh/shadcn1"
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
      />
      <CardHeader>
        <CardAction>
          <Badge variant="default" className="bg-teal-500 text-amber-100">
            Featured
          </Badge>
        </CardAction>
        <CardTitle>Amazing tour to Japan</CardTitle>
        <CardDescription className="min-w-full">
          A practical talk on component APIs, accessibility, and shipping
          faster.
        </CardDescription>
        <div className="container min-w-full  flex justify-between items-center gap-5">
          <div className="flex gap-1">
            <Label>Starts On</Label>
            <Badge className="bg-teal-500 text-amber-100">10/12/84</Badge>
          </div>
          <div className="flex gap-1">
            <Label>Ends On</Label>
            <Badge className="bg-teal-500 text-amber-100">10/12/84</Badge>
          </div>
        </div>
      </CardHeader>
      <CardFooter>
        <Button className="w-full">View Event</Button>
      </CardFooter>
    </Card>
  );
}
