import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Course {
  image: string;
  title: string;
  description: string;
  level: string;
  duration: string;
  slug: string;
}

interface CourseCardProps {
  course: Course;
  index: number;
}

export function CourseCard({ course, index }: CourseCardProps) {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all flex flex-col h-full border border-white/20"
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
          <Badge className="bg-blue-600 hover:bg-blue-600/80 text-white">
            {course.duration}
          </Badge>
          <Link href={`/courses/${course.slug}`} passHref legacyBehavior>
            <Button variant="link" effect="hoverUnderline">
              <span>View Course</span>
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
