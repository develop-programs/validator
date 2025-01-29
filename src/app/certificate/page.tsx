"use client";
import React from "react";
import dynamic from "next/dynamic";
import BackButton from "@/components/BackButton";

const Certificate = dynamic(() => import("@/components/certificate"), {
  ssr: false,
});

export default function page() {
  return (
    <div>
      <Certificate recipientName="Shreyansh Awadhiya" />
      <BackButton />
    </div>
  );
}
