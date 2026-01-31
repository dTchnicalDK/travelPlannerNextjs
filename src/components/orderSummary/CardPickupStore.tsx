"use client";
import { Separator } from "@radix-ui/react-separator";
import {
  ChevronsUp,
  PackageOpen,
  ShoppingBasket,
  ShoppingCart,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Card, CardContent, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

export interface cardProp {
  title: string;
  address: string;
  link?: Boolean;
  linkText?: string;
}

const CardPickupStore = ({ title, address, link, linkText }: cardProp) => {
  const cartItem = ["🍕", "🍜", "🥣", "🥐", "🍳", "🍱", "🍤"];
  const [showAll, setshowAll] = useState(false);
  const maxVisible = 3;
  let substitutionPreference = "";
  return (
    <div>
      {/* pickup store section*/}
      <Card className=" bg-white gap-2">
        {/* //title div */}
        <div className="flex justify-between mx-5 font-bold  text-gray-600">
          <CardTitle className="title flex justify-start gap-3">
            <ShoppingBasket stroke="#354FF8" />
            <p className="text-xl ">{title}</p>
          </CardTitle>
          {/* {link && linkText && <Link href={linkText}>{linkText}</Link>} */}
        </div>

        {/* //address div */}
        <CardContent className="flex justify-center items-center">
          <p className="text-gray-500 ml-9">{address}</p>
        </CardContent>
        <Separator />
      </Card>

      {/* ///////////////////pickup date and time section */}
      <Card className=" bg-white gap-2">
        {/* //title div */}
        <div className="flex justify-between mx-5 font-bold  text-gray-600">
          <CardTitle className="title flex justify-start gap-3">
            <PackageOpen stroke="#354FF8" />
            <p className="text-xl ">Pickup Date & Time</p>
          </CardTitle>
          {link && linkText && (
            <Link href={linkText} className="text-blue-700">
              {linkText}
            </Link>
          )}
        </div>

        {/* //address div */}
        <CardContent className="flex flex-col justify-center items-start">
          <p className="text-gray-500 ml-9">date, today, 10/01/2026</p>
          <p className="text-gray-500 ml-9">Time, 10:30 am</p>
        </CardContent>
        <Separator />
      </Card>

      {/* ///////////////////pickup person */}
      <Card className=" bg-white gap-2">
        {/* //title div */}
        <div className="flex justify-between mx-5 font-bold  text-gray-600">
          <CardTitle className="title flex justify-start gap-3">
            <PackageOpen stroke="#354FF8" />
            <p className="text-xl ">Pickup Person</p>
          </CardTitle>
          {link && linkText && (
            <Link href={linkText} className="text-blue-700">
              {linkText}
            </Link>
          )}
        </div>

        {/* //address div */}
        <CardContent className="flex flex-col justify-center items-start">
          <p className="text-gray-500 ml-9">Name Sandip Mehta</p>
          <p className="text-gray-500 ml-9">mail: sandip@gmail.com</p>
          <p className="text-gray-500 ml-9">mobile: (616) 123456</p>
          <p className="text-gray-500 ml-9">red corvett</p>
        </CardContent>
        <Separator />
      </Card>

      {/* ///////////////////Your Cart */}
      <Card className=" bg-white gap-2">
        {/* //title div */}
        <div className="flex justify-between mx-5 font-bold  text-gray-600 ">
          <CardTitle className="title flex justify-start gap-3">
            <ShoppingCart stroke="#354FF8" />
            <p className="text-xl ">Your Cart</p>
          </CardTitle>
          {link && linkText && (
            <Link href={linkText} className="text-blue-700">
              view
            </Link>
          )}
        </div>

        {/* //address div */}
        <CardContent className="grid grid-cols-4  justify-center gap-2 text-4xl px-15 ">
          {cartItem.length >= 1 &&
            cartItem
              .slice(0, showAll ? cartItem.length : maxVisible)
              .map((item, index) => <div key={index}>{item}</div>)}

          {showAll ? (
            <Button
              onClick={() => setshowAll(!showAll)}
              variant="ghost"
              size="icon"
              className="cursor-pointer ml-10 text-gray-600"
              asChild
            >
              <ChevronsUp />
            </Button>
          ) : (
            <Button
              onClick={() => setshowAll(!showAll)}
              variant="ghost"
              size="icon"
              className="cursor-pointer text-gray-600 text-2xl  "
            >
              + {cartItem.length - maxVisible}
            </Button>
          )}
        </CardContent>
        <Separator />
      </Card>

      {/* ///////////////////substitution preference */}
      <Card className=" bg-white gap-2">
        {/* //title div */}
        <div className="flex justify-between mx-5 font-bold  text-gray-600">
          <CardTitle className="title flex justify-start gap-3">
            <PackageOpen stroke="#354FF8" />
            <p className="text-xl ">Substitution Preference</p>
          </CardTitle>
          {link && linkText && (
            <Link href={linkText} className="text-blue-700">
              {linkText}
            </Link>
          )}
        </div>

        {/* //address div */}
        <CardContent className="flex flex-col justify-center items-start text-gray-600 ml-9">
          {substitutionPreference
            ? substitutionPreference
            : "no substitution preference"}
        </CardContent>
        <Separator />
      </Card>
    </div>
  );
};

export default CardPickupStore;
