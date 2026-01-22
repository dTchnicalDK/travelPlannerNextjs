"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navlist = () => {
  const currentUrl = usePathname();
  if (!currentUrl) {
    return;
  }
  return (
    <>
      <Link
        href={"/dashboard"}
        className={currentUrl === "/dashboard" ? "text-black" : "text-gray-400"}
      >
        Dashboard
      </Link>
      <Link
        href={"/"}
        className={currentUrl === "/" ? "text-black" : "text-gray-400"}
      >
        nav2
      </Link>
    </>
  );
};

export default Navlist;
