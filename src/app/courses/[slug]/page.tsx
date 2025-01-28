import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Book, Video, Link as LinkIcon, FileText } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { courseListData } from "@/json/coursesList";
import { notFound } from "next/navigation";

import { courseData } from "@/json/courses";
// Add types
type Resource = {
  title: string;
  url?: string;
  type: "video" | "article" | "book" | "link";
};

type Week = {
  topics: string | string[];
  resources?: Resource[];
};

type Course = {
  title: string;
  description?: string;
  image?: string;
  weeks: Week[];
};

const ResourceIcon = ({ type }: { type: Resource["type"] }) => {
  if (!type) return <LinkIcon className="w-4 h-4" />; // Add null check

  switch (type.toLowerCase()) {
    case "video":
      return <Video className="w-4 h-4" />;
    case "article":
      return <FileText className="w-4 h-4" />;
    case "book":
      return <Book className="w-4 h-4" />;
    default:
      return <LinkIcon className="w-4 h-4" />;
  }
};

const ResourceItem = ({ resource }: { resource: Resource }) => (
  <li className="flex items-center gap-3 p-3 rounded-lg border hover:bg-gray-50 transition-colors">
    <ResourceIcon type={resource.type} />
    {resource.url ? (
      <Link
        href={resource.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 hover:text-primary hover:underline"
      >
        {resource.title}
      </Link>
    ) : (
      <span className="text-gray-700">{resource.title}</span>
    )}
  </li>
);

export default async function CoursePage({
  params,
}: {
  params: { slug: string };
}) {
  const course = courseListData.find(
    (course) => course.title === params.slug
  ) as unknown as Course;

  const courseInfo = courseData.find((course) => course.slug === params.slug);

  if (!course) {
    notFound();
  }

  const getTopicDisplay = (topics: string | string[]) => {
    if (Array.isArray(topics)) {
      return (
        topics[0] + (topics.length > 1 ? ` (+${topics.length - 1} more)` : "")
      );
    }
    return topics;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[300px] w-full">
        <Image
          src={courseInfo?.image || "/fallback-course-image.jpg"}
          alt={course.title}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="mix-blend-darken"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <h1 className="text-4xl font-bold text-white mb-4">{course.title}</h1>
          <p className="text-white/90 text-lg max-w-2xl">
            {courseInfo?.description}
          </p>
        </div>
      </div>

      {/* Course Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-sm">
          <Accordion type="single" collapsible className="divide-y">
            {course.weeks.map((week, index) => (
              <AccordionItem
                key={`week-${index}-${getTopicDisplay(week.topics)}`}
                value={`item-${index}`}
                className="px-4 transition-colors hover:bg-gray-50"
              >
                <AccordionTrigger className="py-6">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                      {index + 1}
                    </div>
                    <div className="text-left">
                      <span className="text-lg font-semibold block">
                        Week {index + 1}
                      </span>
                      <span className="text-sm text-gray-500">
                        {getTopicDisplay(week.topics)}
                      </span>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="space-y-6 pl-12">
                    <section>
                      <h2 className="text-lg font-semibold mb-3">Topics</h2>
                      {Array.isArray(week.topics) ? (
                        <ul className="grid gap-2">
                          {week.topics.map((topic, topicIndex) => (
                            <li
                              key={`topic-${index}-${topicIndex}-${topic}`}
                              className="flex items-center gap-2 text-gray-700"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                              {topic}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gray-700">{week.topics}</p>
                      )}
                    </section>

                    {week.resources && week.resources.length > 0 && (
                      <section>
                        <h2 className="text-lg font-semibold mb-3">
                          Resources
                        </h2>
                        <ul className="grid gap-3">
                          {week.resources.map((resource, idx) => (
                            <ResourceItem
                              key={`resource-${index}-${idx}-${resource.title}`}
                              resource={resource}
                            />
                          ))}
                        </ul>
                      </section>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
