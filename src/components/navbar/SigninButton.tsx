"use client";
import React from "react";
import { Button } from "../ui/button";
import { signIn } from "@/auth";
import { logIn } from "@/actions/auth.actions";
import { LogIn } from "lucide-react";

const SigninButton = () => {
  return (
    <div>
      <Button onClick={() => logIn()} className="cursor-pointer">
        <LogIn />
        SignIn{" "}
      </Button>
    </div>
  );
};

export default SigninButton;
