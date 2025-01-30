type Resource = {
  title: string;
  url?: string;
  type: "video" | "article" | "book" | "link";
};

type CourseWeek = {
  topics: string | string[];
  resources?: Resource[];
};

export interface Course {
  id: string;
  title: string;
  description: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  image: string;
  duration: string;
  slug: string;
}

export interface CourseDetail extends Course {
  weeks: CourseWeek[];
}

export type ButtonLoadingProps = {
  loading?: boolean;
};
