import { Cross, CrosshairIcon, X } from "lucide-react";
import React from "react";
import { SelectSeparator } from "../ui/select";
import { Separator } from "@radix-ui/react-separator";
import OrderCard from "./OrderCard";

const OrderSummary = () => {
  return (
    //container
    <div className=" max-w-100 bg-white text-black flex flex-col  ">
      {/* //title section */}
      <div className="bg-sky-600 text-white w-full h-15 flex justify-start items-center gap-7 px-10">
        {/* <CrosshairIcon /> */}
        <X />
        <p className="text-2xl font-bold">checkout</p>
      </div>
      {/* //progress */}
      <div className="bg- white text-black h-15 flex justify-between gap-2 items-center my-2 mx-5 relative">
        <div className="progress-line h-2 w-[80%] bg-blue-700 absolute top-2.5 mx-8"></div>
        {/* <div className="progress-line h-2 w-full bg-gray-100 absolute top-2.5"></div> */}
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="w-5 h-5 bg-blue-700 rounded-full "></div>
          <p>Day & Time</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="w-5 h-5 bg-blue-700 rounded-full "></div>
          <p>Day & Time</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="w-5 h-5 bg-blue-700 rounded-full "></div>
          <p>Day & Time</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="w-5 h-5 bg-blue-700 rounded-full "></div>
          <p>Day & Time</p>
        </div>
      </div>
      {/* //payment details */}
      <Separator />
      <div className="bg-gray-100">
        <h1 className="mx-6 text-2xl font-bold text-gray-600 h-15 flex items-center">
          Payment Details
        </h1>
      </div>
      <Separator />
      <div className="grid grid-cols-1 ml-0">
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </div>
    </div>
  );
};

export default OrderSummary;
