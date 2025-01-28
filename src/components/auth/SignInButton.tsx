"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export default function SignInButton() {
  return <Button onClick={() => signIn()}>Sign in</Button>;
}
