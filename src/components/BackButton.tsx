"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";

export default function BackButton() {
  const router = useRouter();
  return (
    <div className="fixed top-12 left-12 z-50">
      <motion.button
        onClick={() => router.back()}
        className="flex items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold rounded-full gap-2 px-6 py-2.5 hover:opacity-90 shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Back
      </motion.button>
    </div>
  );
}
