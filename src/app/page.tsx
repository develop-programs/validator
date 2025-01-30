"use client";
import React from "react";
import { motion } from "framer-motion";
import { courseData } from "@/json/courses";
import Link from "next/link";
import { CourseCard } from "@/components/course-card";

export default function HomePage() {
  const courses = React.useMemo(() => courseData, []);

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-blue-50 to-white text-gray-800 relative overflow-hidden">
      {/* Enhanced background patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-400 rounded-full filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-300 rounded-full filter blur-3xl opacity-20 animate-pulse delay-1000" />

      <main className="container mx-auto px-6 py-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 drop-shadow-sm">
            Learn to Code
            <span className="block mt-2 animate-gradient">
              from a Developer
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Real-world programming expertise meets structured learning
            methodology
          </p>
        </motion.div>

        {/* Enhanced feature cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          {/* Feature cards with enhanced hover effects */}
          <motion.div
            whileHover={{ scale: 1.03, rotateZ: 1 }}
            whileTap={{ scale: 0.98 }}
            className="backdrop-blur-lg bg-white/90 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-white/20 cursor-pointer"
          >
            <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Industry Experience
            </h2>
            <p className="text-gray-600">
              Learn from real-world development scenarios and best practices
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03, rotateZ: 1 }}
            whileTap={{ scale: 0.98 }}
            className="backdrop-blur-lg bg-white/90 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-white/20 cursor-pointer"
          >
            <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Practical Projects
            </h2>
            <p className="text-gray-600">
              Build production-grade applications using modern technologies
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03, rotateZ: 1 }}
            whileTap={{ scale: 0.98 }}
            className="backdrop-blur-lg bg-white/90 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-white/20 cursor-pointer"
          >
            <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Code Reviews
            </h2>
            <p className="text-gray-600">
              Get professional feedback on your code and development approaches
            </p>
          </motion.div>
        </motion.div>

        {/* Enhanced course section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-32"
        >
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Featured Courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses
              .filter((data) => {
                return (
                  data.level === "Beginner" ||
                  data.level === "Intermediate" ||
                  data.level === "Advanced"
                );
              })
              .slice(0, 4)
              .map((course, index) => (
                <CourseCard key={index} course={course} index={index} />
              ))}
          </div>
        </motion.div>

        {/* Enhanced CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-32 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row gap-6">
            <Link href="/courses" passHref>
              <button className="relative inline-flex items-center justify-center px-12 py-4 overflow-hidden font-medium transition-all bg-blue-600 rounded-xl hover:bg-blue-700 group">
                <span className="absolute size-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:size-96 group-hover:scale-150"></span>
                <span className="relative text-white text-lg group-hover:text-blue-600 flex items-center">
                  Start Your Developer Journey
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2 group-hover:translate-x-4 transition-transform"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Experience section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-32"
        >
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            From professional developer to mentor, Commited to providing the
            best learning experience for upcoming developers
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="text-center backdrop-blur-lg bg-white/80 p-8 rounded-2xl shadow-lg border border-white/20"
            >
              <h3 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-2">
                4+
              </h3>
              <p className="text-gray-600 font-medium">Years in Development</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="text-center backdrop-blur-lg bg-white/80 p-8 rounded-2xl shadow-lg border border-white/20"
            >
              <h3 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-2">
                5+
              </h3>
              <p className="text-gray-600 font-medium">Production Projects</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="text-center backdrop-blur-lg bg-white/80 p-8 rounded-2xl shadow-lg border border-white/20"
            >
              <h3 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-2">
                50+
              </h3>
              <p className="text-gray-600 font-medium">
                Student Projects Guided
              </p>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
