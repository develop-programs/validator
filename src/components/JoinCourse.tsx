import React from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const JoinButton = ({ loading }: { loading: boolean }) => (
  <Button
    effect="shineHover"
    className="px-8 py-7 bg-blue-600 hover:bg-blue-600/90 text-white font-semibold text-lg rounded-full shadow-xl transition-all duration-300 flex items-center gap-2 group"
    disabled={loading}
  >
    {loading ? (
      <>
        <svg className="animate-spin h-5 w-5 mr-2 " viewBox="0 0 24 24">
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
        Joining...
      </>
    ) : (
      <>
        Join Course
        <svg
          className="size-6 group-hover:translate-x-2 transition-transform duration-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </>
    )}
  </Button>
);

export default function JoinCourse() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <JoinButton loading={false} />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Join Course</DialogTitle>
          <DialogDescription>
            Provide details about yourself to join the course.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
