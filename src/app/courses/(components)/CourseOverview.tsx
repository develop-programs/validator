"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { Book, Video, Link as LinkIcon, FileText } from "lucide-react";

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

export default function CourseOverview({ course }: { course: Course }) {
  const getTopicDisplay = (topics: string | string[]) => {
    if (Array.isArray(topics)) {
      return (
        topics[0] + (topics.length > 1 ? ` (+${topics.length - 1} more)` : "")
      );
    }
    return topics;
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
    <li className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 hover:border-primary/30 hover:bg-primary/5 hover:scale-102 hover:shadow-md transition-all duration-200 group">
      <div className="p-2 rounded-lg bg-gray-100 group-hover:bg-white group-hover:shadow-inner transition-colors">
        <ResourceIcon type={resource.type} />
      </div>
      {resource.url ? (
        <Link
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-primary font-medium flex-1 flex items-center justify-between"
        >
          {resource.title}
          <span className="opacity-0 group-hover:opacity-100 transition-opacity">
            →
          </span>
        </Link>
      ) : (
        <span className="text-gray-700 font-medium">{resource.title}</span>
      )}
    </li>
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="mb-12 p-6 bg-primary/5 rounded-2xl">
        <h2 className="text-2xl font-bold mb-4">Course Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-primary/10">
              <Book className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Weeks</p>
              <p className="font-semibold">{course.weeks.length}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-primary/10">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Resources</p>
              <p className="font-semibold">
                {course.weeks.reduce(
                  (acc, week) => acc + (week.resources?.length || 0),
                  0
                )}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-primary/10">
              <Video className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Progress</p>
              <p className="font-semibold">0/{course.weeks.length}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl">
        <Accordion
          type="single"
          collapsible
          className="divide-y divide-gray-100"
        >
          {course.weeks.map((week, index) => (
            <AccordionItem
              key={`week-${index}-${getTopicDisplay(week.topics)}`}
              value={`item-${index}`}
              className="px-6 transition-all duration-200 hover:bg-gray-50/80"
            >
              <AccordionTrigger className="py-8 group">
                <div className="flex items-center gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold text-lg transform transition-transform group-hover:scale-110">
                    {index + 1}
                  </div>
                  <div className="text-left">
                    <span className="text-xl font-semibold block text-gray-900 mb-1 group-hover:text-primary transition-colors">
                      Week {index + 1}
                    </span>
                    <span className="text-base text-gray-600 group-hover:text-gray-900 transition-colors">
                      {getTopicDisplay(week.topics)}
                    </span>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-8 animate-slideDown">
                <div className="space-y-8 pl-18">
                  <section className="transition-opacity duration-200 ease-in-out">
                    <h2 className="text-xl font-semibold mb-4 text-gray-900">
                      Topics
                    </h2>
                    {Array.isArray(week.topics) ? (
                      <ul className="grid gap-3">
                        {week.topics.map((topic, topicIndex) => (
                          <li
                            key={`topic-${index}-${topicIndex}-${topic}`}
                            className="flex items-center gap-3 text-gray-700 hover:text-primary transition-colors p-2 rounded-lg hover:bg-primary/5"
                          >
                            <div className="w-2 h-2 rounded-full bg-primary/70 transform transition-transform group-hover:scale-125" />
                            <span className="text-base">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-700 text-base hover:text-gray-900 transition-colors">
                        {week.topics}
                      </p>
                    )}
                  </section>

                  {week.resources && week.resources.length > 0 && (
                    <section className="transition-opacity duration-200 ease-in-out">
                      <h2 className="text-xl font-semibold mb-4 text-gray-900">
                        Resources
                      </h2>
                      <ul className="grid gap-4 animate-fadeIn">
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
  );
}
