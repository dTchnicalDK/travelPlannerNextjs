"use client";

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
        SignOut
      </Button>
    </div>
  );
};

export default SignoutButton;
