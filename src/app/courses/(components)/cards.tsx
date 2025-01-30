"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Course } from "../../../../types";

interface CardsProps {
  isLoading: boolean;
  isGridView: boolean;
  filteredCourses: Course[];
}

export default function Cards({
  isLoading,
  isGridView,
  filteredCourses,
}: CardsProps) {
  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="h-[400px] rounded-2xl bg-white/50 animate-pulse"
            />
          ))}
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={
            isGridView
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              : "flex flex-col gap-6"
          }
        >
          {filteredCourses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`bg-white/90 backdrop-blur-sm shadow-xl ${
                isGridView
                  ? "rounded-2xl overflow-hidden"
                  : "rounded-xl p-4 flex gap-6"
              }`}
            >
              {/* Card Image */}
              <div className={`relative ${isGridView ? "h-52" : "h-48 w-80"}`}>
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  sizes="100%"
                  className={cn(isGridView ? "rounded-t-2xl" : "rounded-xl")}
                  priority
                />
              </div>

              {/* Card Content */}
              <div className={`flex-1 bg-white/30  ${isGridView ? "p-6" : ""}`}>
                <div className="flex flex-col h-full justify-between">
                  <div className="grid gap-2">
                    <h3 className="text-xl font-bold text-gray-800 line-clamp-2 hover:text-blue-600 transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-2 text-sm">
                      {course.description}
                    </p>
                  </div>
                  <div
                    className={cn(
                      isGridView
                        ? "grid gap-2"
                        : "flex justify-between items-center"
                    )}
                  >
                    <div>
                      <Badge className="bg-green-500 hover:bg-green-500/80 text-white">
                        {course.level.charAt(0).toUpperCase() +
                          course.level.slice(1)}
                      </Badge>
                    </div>
                    {/* Action Button */}
                    <div>
                      <Link href={`/courses/${course.id}`} passHref>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
                        >
                          View Course
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
