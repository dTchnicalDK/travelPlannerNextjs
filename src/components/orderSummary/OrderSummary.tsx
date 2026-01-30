import { Check, Cross, CrosshairIcon, Ellipsis, X } from "lucide-react";
import React from "react";
import { SelectSeparator } from "../ui/select";
import { Separator } from "@radix-ui/react-separator";
import OrderCard from "./OrderCard";

const OrderSummary = () => {
  const completed = [1, 2];
  console.log("completed", completed.length);
  return (
    //container
    <div className=" max-w-100 bg-white text-black flex flex-col  ">
      {/* //title section */}
      <div className="bg-sky-600 text-white w-full h-15 flex justify-start items-center gap-7 px-10">
        <X />
        <p className="text-2xl font-bold">checkout</p>
      </div>

      {/* //progress */}
      <div className="bg- white text-black h-15 flex justify-between gap-2 items-center my-2 mx-5 relative">
        <div className="progress-line h-2 w-74 bg-gray-300 absolute top-3.5 z-0 mx-8"></div>

        <div
          className={`progress-line h-2  bg-blue-700 absolute top-3.5 z-10 mx-8`}
          style={{ width: `${99 * completed.length}px` }}
        ></div>

        <div className="flex flex-col justify-center items-center gap-2 z-20">
          <div className="w-5 h-5 bg-blue-700 rounded-full flex justify-center items-center">
            {completed.length == 0 ? (
              <Ellipsis size="12" className="text-green-50 font-bold " />
            ) : (
              <Check size="12" className="text-green-50 font-bold " />
            )}
          </div>
          <small className="text-gray-700">Day & Time</small>
        </div>

        <div className="flex flex-col justify-center items-center gap-2 z-20 ">
          <div
            className={`w-5 h-5 ${completed.length >= 1 ? " bg-blue-700" : "bg-gray-300"} rounded-full flex justify-center items-center`}
          >
            {completed.length < 1 ? (
              <></>
            ) : completed.length == 1 ? (
              <Ellipsis size="12" className="text-green-50 font-bold " />
            ) : (
              <Check size="12" className="text-green-50 font-bold " />
            )}
          </div>
          <small className="text-gray-700">Contact Info</small>
        </div>

        <div className="flex flex-col justify-center items-center gap-2 z-20 ">
          <div
            className={`w-5 h-5 ${completed.length >= 2 ? " bg-blue-700" : "bg-gray-300"} rounded-full flex justify-center items-center`}
          >
            {completed.length < 2 ? (
              <></>
            ) : completed.length == 2 ? (
              <Ellipsis size="12" className="text-green-50 font-bold " />
            ) : (
              <Check size="12" className="text-green-50 font-bold " />
            )}
          </div>
          <small className="text-gray-700">Payment</small>
        </div>

        <div className="flex flex-col justify-center items-center gap-2 z-20  ">
          <div
            className={`w-5 h-5 ${completed.length >= 3 ? " bg-blue-700" : "bg-gray-300"} rounded-full flex justify-center items-center`}
          >
            {completed.length >= 3 ? (
              <Check size="12" className="text-green-50 font-bold " />
            ) : (
              <></>
            )}
          </div>
          <small className="text-gray-700">Review Order</small>
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
