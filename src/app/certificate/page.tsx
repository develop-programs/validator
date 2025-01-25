"use client";
import React from "react";
import dynamic from "next/dynamic";

const Certificate = dynamic(() => import("@/components/certificate"), {
  ssr: false,
});

export default function page() {
  return (
    <div>
      <Certificate recipientName="Shreyansh Awadhiya" />
    </div>
  );
}
