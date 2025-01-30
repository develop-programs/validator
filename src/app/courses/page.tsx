/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useState, useCallback } from "react";
import { List, LayoutGrid } from "lucide-react";
import { motion } from "framer-motion";
import debounce from "lodash/debounce";
import { courseData } from "@/json/courses";
import BackButton from "@/components/BackButton";
import Cards from "./(components)/cards";
import { Course } from "../../../types";

type Level = "all" | "Beginner" | "Intermediate" | "Advanced";

export default function CoursesPage() {
  const [selectedLevel, setSelectedLevel] = useState<Level>("all");
  const [isLoading, setIsLoading] = useState(true);
  const [isGridView, setIsGridView] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const courses = React.useMemo(() => courseData as Course[], []);

  const filteredCourses = React.useMemo(() => {
    return courses.filter((course) => {
      const matchesLevel =
        selectedLevel === "all" || course.level === selectedLevel;
      const matchesSearch = course.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      return matchesLevel && matchesSearch;
    });
  }, [courses, selectedLevel, searchTerm]);

  const debouncedSearch = useCallback(
    debounce((value: string) => setSearchTerm(value), 300),
    []
  );

  React.useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);

    const timer = setTimeout(() => {
      if (!controller.signal.aborted) {
        setIsLoading(false);
      }
    }, 500);

    return () => {
      controller.abort();
      clearTimeout(timer);
    };
  }, [selectedLevel]);

  const levels: Level[] = ["all", "Beginner", "Intermediate", "Advanced"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-white text-gray-800 relative animate-fadeIn">
      {/* Grid pattern style */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0 0 0 / 0.1) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 relative">
        <div className="text-center mb-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800">
            Learn New Skills
          </h1>
          <p className="text-xl text-gray-600 mt-2">
            Choose from a wide range of courses to learn new skills and grow
            your career.
          </p>
        </div>
        <div className="mb-8 flex flex-col items-center gap-4">
          <div className="w-full max-w-md relative">
            <input
              type="text"
              onChange={(e) => debouncedSearch(e.target.value)}
              placeholder="Search courses..."
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            />
            <motion.div
              initial={false}
              animate={{ opacity: searchTerm ? 1 : 0 }}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500"
            >
              {filteredCourses.length} results
            </motion.div>
          </div>
          <div className="flex justify-center gap-4">
            {levels.map((level) => (
              <motion.button
                key={level}
                onClick={() => setSelectedLevel(level)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-pressed={selectedLevel === level}
                className={`px-8 py-1.5 rounded-full backdrop-blur-sm ${
                  selectedLevel === level
                    ? "bg-white/90 shadow-lg shadow-blue-500/30 text-blue-600 border-2 border-blue-500/50"
                    : "bg-white/30 hover:bg-white/50 text-gray-700 border border-white/60 hover:border-blue-300/50"
                } transition-all duration-300 font-medium`}
              >
                {level.charAt(0).toUpperCase() + level.slice(1)}
              </motion.button>
            ))}
          </div>
          <p className="text-gray-600">
            Showing {filteredCourses.length}{" "}
            {filteredCourses.length === 1 ? "course" : "courses"}
          </p>
          <div className="flex items-center gap-4 mt-4 bg-white/50 p-2 rounded-lg backdrop-blur-sm">
            <button
              onClick={() => setIsGridView(true)}
              className={`p-2 rounded-md transition-all duration-300 ${
                isGridView
                  ? "bg-blue-100 text-blue-600 shadow-md"
                  : "text-gray-400 hover:text-blue-500"
              }`}
            >
              <LayoutGrid className="size-6" />
            </button>
            <button
              onClick={() => setIsGridView(false)}
              className={`p-2 rounded-md transition-all duration-300 ${
                !isGridView
                  ? "bg-blue-100 text-blue-600 shadow-md"
                  : "text-gray-400 hover:text-blue-500"
              }`}
            >
              <List size={20} />
            </button>
          </div>
        </div>

        <Cards
          isLoading={isLoading}
          isGridView={isGridView}
          filteredCourses={filteredCourses}
        />

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-5 py-3 rounded-full shadow-lg backdrop-blur-sm hover:shadow-xl transition-all duration-300"
        >
          Get Started
        </motion.button>
      </main>
      <BackButton />
    </div>
  );
}
