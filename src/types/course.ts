export interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  slug: string;
}

export interface CourseWeek {
  topics: string | string[];
  resources?: {
    title: string;
    url?: string;
    type: 'video' | 'article' | 'book' | 'link';
  }[];
}

export interface CourseDetail extends Course {
  weeks: CourseWeek[];
}
