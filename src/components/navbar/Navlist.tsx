"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navlist = () => {
  const listArray = ["home", "dashboard"];
  const currentUrl = usePathname();
  if (!currentUrl) {
    return;
  }
  return (
    <>
      {listArray.map((list, key) => (
        <Link
          key={key}
          href={list === "home" ? "/" : `/${list}`}
          className={
            currentUrl === `/${list}` ? "text-teal-600" : "text-gray-400"
          }
        >
          <h1 className="capitalize">{list}</h1>
        </Link>
      ))}
    </>
  );
};

export default Navlist;
