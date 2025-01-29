// courses.tsx
export const courseData = [
  {
    id: "web-dev-101",
    title: "Web Development Fundamentals",
    slug: "web-dev-101",
    category: "Foundational",
    description:
      "Master HTML, CSS, and JavaScript with hands-on projects and real-world applications.",
    image: "/courses/web-dev-101.jpg",
    duration: "12 weeks",
    level: "Beginner",
    prerequisites: "None",
    learningOutcomes: [
      "Build responsive websites",
      "Understand DOM manipulation",
      "Implement modern JavaScript features",
    ],
    instructor: {
      name: "Sarah Johnson",
      bio: "Full-stack developer with 8+ years of teaching experience",
      avatar: "/instructors/sarah_johnson.jpg",
    },
  },
  {
    id: "frontend-advanced",
    title: "Advanced Frontend Development",
    slug: "frontend-advanced",
    category: "Frontend",
    description:
      "Deep dive into modern frontend frameworks and performance optimizations.",
    image: "/courses/frontend-advanced.jpg",
    duration: "10 weeks",
    level: "Intermediate",
    prerequisites: "Basic HTML, CSS, JavaScript",
    learningOutcomes: [
      "Master React.js and Vue.js",
      "Optimize frontend performance",
      "Create scalable frontend architectures",
    ],
    instructor: {
      name: "Michael Chen",
      bio: "Senior frontend engineer specializing in UI/UX",
      avatar: "/instructors/michael_chen.jpg",
    },
  },
  {
    id: "backend-mastery",
    title: "Backend Development Mastery",
    slug: "backend-mastery",
    category: "Backend",
    description:
      "Learn to build scalable backend systems with Node.js and databases.",
    image: "/courses/backend-mastery.jpg",
    duration: "14 weeks",
    level: "Advanced",
    prerequisites: "Basic JavaScript, SQL",
    learningOutcomes: [
      "Develop RESTful APIs",
      "Implement authentication and security",
      "Optimize database queries",
    ],
    instructor: {
      name: "Elena Smith",
      bio: "Backend architect with expertise in high-performance systems",
      avatar: "/instructors/elena_smith.jpg",
    },
  },
  {
    id: "fullstack-pro",
    title: "Fullstack Web Development",
    slug: "fullstack-pro",
    category: "Fullstack",
    description:
      "Master the complete web development stack with real-world projects.",
    image: "/courses/fullstack-pro.jpg",
    duration: "16 weeks",
    level: "Advanced",
    prerequisites: "Intermediate frontend and backend skills",
    learningOutcomes: [
      "Build fullstack applications",
      "Integrate frontend and backend",
      "Deploy applications with CI/CD",
    ],
    instructor: {
      name: "David Lee",
      bio: "Expert in fullstack development and DevOps",
      avatar: "/instructors/david_lee.jpg",
    },
  },
];
