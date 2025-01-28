"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { courseData } from "@/json/courses";
import Link from "next/link";

export default function CoursesPage() {
  const [selectedLevel, setSelectedLevel] = useState<string>("all");
  const courses = React.useMemo(() => courseData, []);

  const filteredCourses = React.useMemo(() => {
    if (selectedLevel === "all") return courses;
    return courses.filter((course) => course.level === selectedLevel);
  }, [courses, selectedLevel]);

  // const getUrlSafeSlug = (title: string) => {
  //   return encodeURIComponent(title.toLowerCase().replace(/\s+/g, "-"));
  // };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-white text-gray-800 relative">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

      <main className="max-w-7xl mx-auto px-6 py-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center relative"
        >
          <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-blue-100 rounded-full blur-3xl opacity-70" />
          <span className="absolute top-0 left-1/3 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-purple-100 rounded-full blur-3xl opacity-60" />
          <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 inline-block text-transparent bg-clip-text animate-gradient">
            Our Courses
          </h1>
          <p className="text-xl text-gray-600 mb-12 tracking-wide">
            Explore our comprehensive collection of courses
          </p>
        </motion.div>

        <div className="mb-12 flex justify-center gap-4">
          {["all", "Beginner", "Intermediate", "Advanced"].map((level) => (
            <motion.button
              key={level}
              onClick={() => setSelectedLevel(level)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-2.5 rounded-full backdrop-blur-sm ${
                selectedLevel === level
                  ? "bg-white/90 shadow-lg shadow-blue-500/30 text-blue-600 border-2 border-blue-500/50"
                  : "bg-white/30 hover:bg-white/50 text-gray-700 border border-white/60 hover:border-blue-300/50"
              } transition-all duration-300 font-medium`}
            >
              {level.charAt(0).toUpperCase() + level.slice(1)}
            </motion.button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredCourses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="backdrop-blur-md bg-white/70 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col border border-white/90"
            >
              <div className="h-52 w-full bg-gray-200 relative overflow-hidden group">
                <Image
                  src={course.image}
                  alt={course.title}
                  width={500}
                  height={300}
                  decoding="async"
                  loading="lazy"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 backdrop-blur-xl bg-white/40 text-blue-600 px-5 py-2 rounded-full text-sm font-semibold border border-white/60 shadow-lg">
                  {course.level}
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {course.description}
                  </p>
                </div>
                <div className="flex justify-between items-center pt-6 border-t border-gray-200/50">
                  <span className="text-blue-600 font-semibold text-lg">
                    {course.duration}
                  </span>
                  <Link href={`/courses/${course.id}`} passHref legacyBehavior>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative px-6 py-2.5 overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white transition-all duration-300"
                    >
                      <span className="relative z-10 font-medium">
                        Enroll Now
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out" />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
}
