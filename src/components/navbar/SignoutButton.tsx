"use client";

import { LogOut } from "lucide-react";
import { Button } from "../ui/button";
import { logOut } from "@/actions/auth.actions";

const SignoutButton = () => {
  return (
    <div>
      <Button
        onClick={() => logOut()}
        variant="outline"
        className="cursor-pointer"
      >
        <LogOut />
        SignOut
      </Button>
    </div>
  );
};

export default SignoutButton;
