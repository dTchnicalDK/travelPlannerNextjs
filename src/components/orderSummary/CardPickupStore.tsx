"use client";
import { Separator } from "@radix-ui/react-separator";
import { ShoppingBasket } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Card, CardContent, CardTitle } from "../ui/card";

export interface cardProp {
  title: string;
  address: string;
  link?: Boolean;
  linkText?: string;
}

const CardPickupStore = ({ title, address, link, linkText }: cardProp) => {
  return (
    <Card className=" bg-white gap-2">
      {/* //title div */}
      <div className="flex justify-between mx-5 font-bold  text-gray-600">
        <CardTitle className="title flex justify-start gap-3">
          <ShoppingBasket />
          <p className="text-xl ">{title}</p>
        </CardTitle>
        {link && linkText && <Link href={linkText}>{linkText}</Link>}
      </div>

      {/* //address div */}
      <CardContent className="flex justify-center items-center">
        <p className="text-gray-500 ml-9">{address}</p>
      </CardContent>
      <Separator />
    </Card>
  );
};

export default CardPickupStore;
