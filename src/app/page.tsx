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
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
      <main className="container mx-auto px-6 py-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
            Learn to Code
            <span className="block mt-2">from a Developer</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Real-world programming expertise meets structured learning
            methodology
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="backdrop-blur-lg bg-white/80 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-white/20"
          >
            <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Industry Experience
            </h2>
            <p className="text-gray-600">
              Learn from real-world development scenarios and best practices
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="backdrop-blur-lg bg-white/80 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-white/20"
          >
            <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Practical Projects
            </h2>
            <p className="text-gray-600">
              Build production-grade applications using modern technologies
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="backdrop-blur-lg bg-white/80 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-white/20"
          >
            <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Code Reviews
            </h2>
            <p className="text-gray-600">
              Get professional feedback on your code and development approaches
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
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
              .map((course, index) => (
                <CourseCard key={index} course={course} index={index} />
              ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row gap-6">
            <Link href="/courses" passHref>
              <button className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-medium transition-all bg-blue-600 rounded-xl border hover:border-2 hover:bg-blue-500 group">
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:size-96"></span>
                <span className="relative text-white group-hover:text-blue-600">
                  Start Your Developer Journey
                </span>
              </button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-600 text-lg font-medium mb-12">
            From professional development to teaching the next generation of
            developers
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
