"use server";

import { signIn, signOut } from "@/auth";

//fuction to login
export const logIn = async () => {
  await signIn("github", { redirectTo: "/dashboard" });
};

//fuction to logout
export const logOut = async () => {
  await signOut({ redirectTo: "/" });
};
