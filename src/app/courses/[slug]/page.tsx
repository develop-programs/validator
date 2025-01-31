import React from "react";
import Image from "next/image";
import { courseListData } from "@/json/coursesList";
import { notFound } from "next/navigation";
import { courseData } from "@/json/courses";
import BackButton from "@/components/BackButton";
import CourseOverview from "../(components)/CourseOverview";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import JoinCourse from "@/components/JoinCourse";

interface Resource {
  title: string;
  type?: "video" | "article" | "book";
  url?: string;
}

interface Course {
  title: string;
  weeks: {
    topics: string | string[];
    resources?: Resource[];
  }[];
}

export default async function CoursePage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = (await params).slug;
  const course = courseListData.find((course) => course.title === slug) as
    | Course
    | undefined;

  const courseInfo = courseData.find((course) => course.slug === slug);

  if (!course || !courseInfo) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Enhanced Hero Section */}
      <div className="relative h-[500px] w-full">
        <Image
          src={courseInfo?.image || "/fallback-course-image.jpg"}
          alt={course.title}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          decoding="async"
          loading="lazy"
          className="brightness-100 aspect-video object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
        <div className="absolute bottom-0 left-0 right-0 p-12 max-w-7xl mx-auto space-y-6">
          <div className="flex items-center gap-6">
            <span className="px-6 py-2.5 bg-primary/30 text-white rounded-full text-sm font-semibold backdrop-blur-md shadow-lg hover:bg-primary/40 transition-all duration-300 flex items-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {courseInfo?.duration || "8 weeks"}
            </span>
            <span className="px-6 py-2.5 bg-white/25 text-white rounded-full text-sm font-semibold backdrop-blur-md shadow-lg hover:bg-white/30 transition-all duration-300 flex items-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
              {courseInfo?.level || "All Levels"}
            </span>
          </div>
          <div className="space-y-4">
            <h1 className="text-6xl font-bold text-white leading-tight uppercase">
              {course.title}
            </h1>
            <p className="text-white/90 text-lg font-light leading-relaxed">
              {courseInfo?.description}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <JoinCourse />
            <Link href="/certificate" passHref legacyBehavior>
              <Button className="group ml-4 px-8 py-7 bg-green-600 hover:bg-green-600/80 text-white font-semibold text-lg rounded-full shadow-xl transition-all duration-300 flex items-center gap-3 backdrop-blur-md border border-white/20 hover:border-white/40 [&_svg]:size-6">
                <span className="relative">
                  Get Certificate
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
                </span>
                <svg
                  className="size-8 text-emerald-200 transform transition-transform group-hover:rotate-12 group-hover:scale-110"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <CourseOverview course={course} />
      <div className="pb-12">
        <BackButton />
      </div>
    </div>
  );
}
