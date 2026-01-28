import { Separator } from "@radix-ui/react-separator";
import { ShoppingBasket } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Card, CardContent, CardTitle } from "../ui/card";

const OrderCard = () => {
  return (
    <Card className=" bg-white gap-4">
      {/* //title div */}
      <div className="flex justify-between mx-5  ">
        <CardTitle className="title flex justify-start gap-3">
          <ShoppingBasket />
          <p className="text-xl font-bold text-gray-600">
            This is the title section
          </p>
        </CardTitle>
        <Link href={"#"}>Edit</Link>
      </div>

      {/* //address div */}
      <CardContent className="flex w-1/2 justify-center items-center">
        <p className="text-gray-500 ml-15">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        </p>
      </CardContent>
      <Separator />
    </Card>
  );
};

export default OrderCard;
