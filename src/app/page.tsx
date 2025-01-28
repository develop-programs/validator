"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { courseData } from "@/json/courses";

export default function HomePage() {
  const courses = React.useMemo(() => courseData, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white text-gray-800">
      <main className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-6xl font-bold mb-6">
            Learn to Code
            <span className="text-blue-600"> from a Developer</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12">
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
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">
              Industry Experience
            </h2>
            <p className="text-gray-600">
              Learn from real-world development scenarios and best practices
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">
              Practical Projects
            </h2>
            <p className="text-gray-600">
              Build production-grade applications using modern technologies
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">
              Code Reviews
            </h2>
            <p className="text-gray-600">
              Get professional feedback on your code and development approaches
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24"
        >
          <h2 className="text-4xl font-bold text-center mb-12">
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
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full"
                >
                  <div className="h-48 w-full bg-gray-200 relative">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover"
                      priority={index < 2}
                    />
                    <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-medium">
                      {course.level}
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-gray-800">
                        {course.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {course.description}
                      </p>
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                      <span className="text-blue-600 font-medium text-sm">
                        {course.duration}
                      </span>
                      <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1 transition-colors">
                        Learn More
                        <span aria-hidden="true">&rarr;</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-colors">
              Start Your Developer Journey
            </button>
            <button className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-medium transition-colors">
              View Course Curriculum
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600">
            From professional development to teaching the next generation of
            developers
          </p>
          <div className="mt-8 flex justify-center space-x-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-blue-600">4+</h3>
              <p className="text-gray-600">Years in Development</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-blue-600">5+</h3>
              <p className="text-gray-600">Production Projects</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-blue-600">50+</h3>
              <p className="text-gray-600">Student Projects Guided</p>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
