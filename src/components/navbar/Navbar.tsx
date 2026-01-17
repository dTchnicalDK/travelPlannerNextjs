import Link from "next/link";
import React from "react";

import SigninButton from "./SigninButton";
import SignoutButton from "./SignoutButton";
import { auth } from "@/auth";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Separator } from "../ui/separator";

const Navbar = async () => {
  const session = await auth();

  return (
    <div className="w-full font-medium text-2xl flex justify-between items-center gap-5 px-10 border-b-2 py-3">
      <div className="left flex gap-2">
        <Link href={"/"}>TravelPlanner 😎 </Link>
      </div>
      <div className="right flex justify-between items-center gap-5">
        <Link href={"/"}>nav1</Link>
        <Link href={"/"}>nav2</Link>

        {session ? (
          <div className="flex flex-row flex-wrap items-center gap-12 cursor-pointer">
            <Popover>
              <PopoverTrigger asChild>
                <Avatar>
                  <AvatarImage
                    src={session.user?.image || "https://github.com/shadcn.png"}
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <h1 className="italic font-mono font-bold text-teal-600">
                  dharmendra chauhan
                </h1>
                <ul className="py-2">
                  <Link href="/" className="text-blue-700 hover:text-blue-400">
                    <li>profile settings</li>
                  </Link>
                  <li>option 1</li>
                  <li>option 2</li>
                </ul>
                <div className="py-2">
                  <Separator />
                </div>
                <SignoutButton />
              </PopoverContent>
            </Popover>
          </div>
        ) : (
          <SigninButton />
        )}
      </div>
    </div>
  );
};

export default Navbar;
