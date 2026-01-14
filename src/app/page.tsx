"use client";

import { logIn, logOut } from "@/actions/auth.actions";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>homepage</h1>
      <button
        onClick={async () => await logIn()}
        className="bg-green-300 px-5 py-3 rounded-2xl my-3 cursor-pointer"
      >
        login
      </button>
      <button
        onClick={async () => logOut()}
        className="bg-red-300 px-5 py-3 rounded-2xl my-3 cursor-pointer"
      >
        logout
      </button>
    </div>
  );
}
