"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Fixed import
import { Grid, List, Star, Search } from "lucide-react"; // Added Search icon
import Image from "next/image";
import { courseData } from "@/json/courses";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import BackButton from "@/components/BackButton";
import { cn } from "@/lib/utils";

export default function CoursesPage() {
  const [selectedLevel, setSelectedLevel] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [isGridView, setIsGridView] = useState(true);
  const courses = React.useMemo(() => courseData, []);

  const filteredCourses = React.useMemo(() => {
    const levelFiltered =
      selectedLevel === "all"
        ? courses
        : courses.filter((course) => course.level === selectedLevel);

    return levelFiltered.filter(
      (course) =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [courses, selectedLevel, searchQuery]);

  React.useEffect(() => {
    // Simulate loading state
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, [selectedLevel, searchQuery]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-white text-gray-800 relative">
      {/* Grid pattern style */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0 0 0 / 0.1) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

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

        <div className="mb-8 relative">
          <div className="max-w-md mx-auto relative">
            <div className="relative">
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>
            {searchQuery && (
              <div className="absolute w-full bg-white rounded-lg shadow-lg mt-2 p-2 z-10">
                <p className="text-sm text-gray-500 p-2">
                  {filteredCourses.length} results found
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="mb-8 flex flex-col items-center gap-4">
          <div className="flex justify-center gap-4">
            {["all", "Beginner", "Intermediate", "Advanced"].map((level) => (
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
          <div className="flex items-center gap-4 mt-4">
            <button
              onClick={() => setIsGridView(true)}
              className={`p-2 rounded ${
                isGridView ? "bg-blue-100 text-blue-600" : "text-gray-400"
              }`}
            >
              <Grid size={20} />
            </button>
            <button
              onClick={() => setIsGridView(false)}
              className={`p-2 rounded ${
                !isGridView ? "bg-blue-100 text-blue-600" : "text-gray-400"
              }`}
            >
              <List size={20} />
            </button>
          </div>
        </div>

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
                  <div
                    className={`relative ${isGridView ? "h-48" : "h-40 w-60"}`}
                  >
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      sizes="100%"
                      className={cn(
                        isGridView ? "rounded-t-2xl" : "rounded-xl"
                      )}
                      priority
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-blue-500/90 hover:bg-blue-600 text-white">
                        {course.level}
                      </Badge>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div
                    className={`flex-1 bg-white/30 ${isGridView ? "p-6" : ""}`}
                  >
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-gray-800 line-clamp-2 hover:text-blue-600 transition-colors">
                        {course.title}
                      </h3>
                      <p className="text-gray-600 line-clamp-2 text-sm">
                        {course.description}
                      </p>

                      {/* Course Meta */}
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span>4.8</span>
                        </div>
                        <div className="h-1 w-1 bg-gray-300 rounded-full" />
                        <span>{course.duration}</span>
                      </div>

                      {/* Action Button */}
                      <div className="pt-2">
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
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <BackButton />
    </div>
  );
}
