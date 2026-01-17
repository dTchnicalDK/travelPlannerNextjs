"use client";
import React from "react";
import { Button } from "../ui/button";
import { signIn } from "@/auth";
import { logIn } from "@/actions/auth.actions";

const SigninButton = () => {
  return (
    <div>
      <Button onClick={() => logIn()} className="cursor-pointer">
        SignIn{" "}
      </Button>
    </div>
  );
};

export default SigninButton;
