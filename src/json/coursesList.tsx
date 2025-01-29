export const courseListData = [
  {
    title: "web-dev-101",
    duration: "12 weeks",
    weeks: [
      {
        weekNumber: 1,
        topics: ["HTML Fundamentals", "Document Structure", "Semantic HTML"],
        assignments: [
          "Create a personal portfolio structure",
          "Semantic markup exercise",
        ],
        resources: [
          { 
            title: "MDN HTML Guide", 
            type: "article",
            url: "https://developer.mozilla.org/en-US/docs/Learn/HTML"
          },
          { 
            title: "HTML5 Specification", 
            type: "link",
            url: "https://html.spec.whatwg.org/"
          }
        ],
      },
      {
        weekNumber: 2,
        topics: ["CSS Basics", "Selectors", "Box Model", "Typography"],
        assignments: ["Style the portfolio", "Create a responsive navbar"],
        resources: [
          { 
            title: "CSS Reference", 
            type: "article",
            url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference"
          },
          { 
            title: "Google Fonts", 
            type: "link",
            url: "https://fonts.google.com/"
          }
        ],
      },
      {
        weekNumber: 3,
        topics: ["CSS Layout", "Flexbox", "Grid", "Responsive Design"],
        assignments: [
          "Build a responsive grid layout",
          "Media queries implementation",
        ],
        resources: [
          { 
            title: "Flexbox Guide", 
            type: "article",
            url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
          },
          { 
            title: "CSS Grid Tutorial", 
            type: "link",
            url: "https://cssgrid.io/"
          }
        ],
      },
      {
        weekNumber: 4,
        topics: ["JavaScript Basics", "Variables", "Functions", "Control Flow"],
        assignments: ["Basic JavaScript exercises", "Simple calculator"],
        resources: [
          { 
            title: "JavaScript.info", 
            type: "article",
            url: "https://javascript.info/"
          },
          { 
            title: "Eloquent JavaScript", 
            type: "book",
            url: "https://eloquentjavascript.net/"
          }
        ],
      },
      {
        weekNumber: 5,
        topics: ["DOM Manipulation", "Events", "Local Storage"],
        assignments: ["Interactive form validation", "Todo list application"],
        resources: [
          { 
            title: "DOM Documentation", 
            type: "article",
            url: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model"
          },
          { 
            title: "Event Reference", 
            type: "link",
            url: "https://developer.mozilla.org/en-US/docs/Web/Events"
          }
        ],
      },
      {
        weekNumber: 6,
        topics: ["ES6+ Features", "Promises", "Async/Await"],
        assignments: ["Weather API integration", "Async data handling"],
        resources: [
          { 
            title: "ES6 Features Guide", 
            type: "article",
            url: "https://www.w3schools.com/js/js_es6.asp"
          },
          { 
            title: "JavaScript Promises", 
            type: "link",
            url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"
          },
        ],
      },
      {
        weekNumber: 7,
        topics: ["APIs", "REST", "JSON", "Fetch API"],
        assignments: ["Build a RESTful API client", "Data visualization"],
        resources: [
          { 
            title: "REST API Design", 
            type: "article",
            url: "https://restfulapi.net/"
          },
          { 
            title: "Fetch API Guide", 
            type: "link",
            url: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"
          },
        ],
      },
      {
        weekNumber: 8,
        topics: ["Bootstrap Framework", "Responsive Components"],
        assignments: ["Bootstrap portfolio redesign", "Responsive dashboard"],
        resources: [
          { 
            title: "Bootstrap Documentation", 
            type: "article",
            url: "https://getbootstrap.com/docs/"
          },
          { 
            title: "Bootstrap Examples", 
            type: "link",
            url: "https://getbootstrap.com/docs/5.3/examples/"
          },
        ],
      },
      {
        weekNumber: 9,
        topics: ["Web Performance", "SEO Basics", "Accessibility"],
        assignments: ["Performance optimization", "SEO audit"],
        resources: [
          { 
            title: "Web.dev", 
            type: "article",
            url: "https://web.dev/learn"
          },
          { 
            title: "Lighthouse Tool", 
            type: "link",
            url: "https://developers.google.com/web/tools/lighthouse"
          },
        ],
      },
      {
        weekNumber: 10,
        topics: ["Version Control", "Git Basics", "GitHub"],
        assignments: ["Git workflow practice", "Collaborative project"],
        resources: [
          { 
            title: "Git Documentation", 
            type: "article",
            url: "https://git-scm.com/doc"
          },
          { 
            title: "GitHub Guides", 
            type: "link",
            url: "https://guides.github.com/"
          },
        ],
      },
      {
        weekNumber: 11,
        topics: ["Web Security", "HTTPS", "Cross-Site Scripting"],
        assignments: ["Security audit", "Implement security measures"],
        resources: [
          { 
            title: "OWASP Guide", 
            type: "article",
            url: "https://owasp.org/www-project-top-ten/"
          },
          { 
            title: "Web Security Course", 
            type: "course",
            url: "https://www.coursera.org/learn/web-security"
          },
        ],
      },
      {
        weekNumber: 12,
        topics: ["Final Project", "Portfolio Polish", "Deployment"],
        assignments: ["Complete portfolio website", "Deploy to hosting"],
        resources: [
          { 
            title: "Hosting Platforms", 
            type: "article",
            url: "https://www.netlify.com/blog/2021/03/16/best-web-hosting-platforms/"
          },
          { 
            title: "Portfolio Examples", 
            type: "link",
            url: "https://www.behance.net/search/projects?field=web%20design"
          },
        ],
      },
    ],
  },
  {
    title: "mern-stack",
    duration: "14 weeks",
    weeks: [
      {
        weekNumber: 1,
        topics: ["MongoDB Basics", "NoSQL Concepts", "Data Modeling"],
        assignments: ["Setup MongoDB Atlas", "Basic CRUD operations"],
        resources: [
          { 
            title: "MongoDB University", 
            type: "link",
            url: "https://university.mongodb.com/"
          },
          { 
            title: "NoSQL Design Patterns", 
            type: "article",
            url: "https://www.mongodb.com/nosql-explained"
          },
        ],
      },
      {
        weekNumber: 2,
        topics: ["MongoDB Advanced", "Aggregation", "Indexing"],
        assignments: ["Complex queries", "Database optimization"],
        resources: [
          { 
            title: "MongoDB Documentation", 
            type: "article",
            url: "https://docs.mongodb.com/"
          },
          { 
            title: "Performance Best Practices", 
            type: "link",
            url: "https://www.mongodb.com/blog/post/performance-best-practices"
          },
        ],
      },
      {
        weekNumber: 3,
        topics: ["Express.js Fundamentals", "Routing", "Middleware"],
        assignments: ["Basic Express server", "Custom middleware"],
        resources: [
          { 
            title: "Express.js Guide", 
            type: "article",
            url: "https://expressjs.com/en/guide/routing.html"
          },
          { 
            title: "Middleware Examples", 
            type: "link",
            url: "https://expressjs.com/en/resources/middleware.html"
          },
        ],
      },
      {
        weekNumber: 4,
        topics: ["Express.js Advanced", "Authentication", "Authorization"],
        assignments: ["JWT implementation", "Role-based access"],
        resources: [
          { 
            title: "JWT.io", 
            type: "link",
            url: "https://jwt.io/"
          },
          { 
            title: "OAuth Documentation", 
            type: "article",
            url: "https://oauth.net/documentation/"
          },
        ],
      },
      {
        weekNumber: 5,
        topics: ["React Fundamentals", "Components", "Props", "State"],
        assignments: ["Component library", "State management exercise"],
        resources: [
          { 
            title: "React Documentation", 
            type: "article",
            url: "https://reactjs.org/docs/getting-started.html"
          },
          { 
            title: "Component Patterns", 
            type: "link",
            url: "https://reactpatterns.com/"
          },
        ],
      },
      {
        weekNumber: 6,
        topics: ["React Hooks", "Context API", "Custom Hooks"],
        assignments: ["Hook implementation", "Global state management"],
        resources: [
          { 
            title: "Hooks API Reference", 
            type: "article",
            url: "https://reactjs.org/docs/hooks-reference.html"
          },
          { 
            title: "Context Guide", 
            type: "link",
            url: "https://reactjs.org/docs/context.html"
          },
        ],
      },
      {
        weekNumber: 7,
        topics: ["React Router", "Navigation", "Protected Routes"],
        assignments: ["Multi-page application", "Auth routing"],
        resources: [
          { 
            title: "React Router Docs", 
            type: "article",
            url: "https://reactrouter.com/docs/en/v6"
          },
          { 
            title: "Navigation Patterns", 
            type: "link",
            url: "https://reactrouter.com/docs/en/v6/getting-started/overview"
          },
        ],
      },
      {
        weekNumber: 8,
        topics: ["Redux", "Actions", "Reducers", "Store"],
        assignments: ["Redux implementation", "State management"],
        resources: [
          { 
            title: "Redux Documentation", 
            type: "article",
            url: "https://redux.js.org/introduction/getting-started"
          },
          { 
            title: "Redux Toolkit", 
            type: "link",
            url: "https://redux-toolkit.js.org/"
          },
        ],
      },
      {
        weekNumber: 9,
        topics: ["Node.js Fundamentals", "Event Loop", "Modules"],
        assignments: ["Node.js server", "Module creation"],
        resources: [
          { 
            title: "Node.js Docs", 
            type: "article",
            url: "https://nodejs.org/en/docs/"
          },
          { 
            title: "Event Loop Guide", 
            type: "link",
            url: "https://nodejs.dev/learn/the-nodejs-event-loop"
          },
        ],
      },
      {
        weekNumber: 10,
        topics: ["API Integration", "REST Architecture", "GraphQL"],
        assignments: ["RESTful API", "GraphQL server"],
        resources: [
          { 
            title: "REST Best Practices", 
            type: "article",
            url: "https://restfulapi.net/best-practices/"
          },
          { 
            title: "GraphQL Docs", 
            type: "link",
            url: "https://graphql.org/learn/"
          },
        ],
      },
      {
        weekNumber: 11,
        topics: ["Testing", "Jest", "React Testing Library"],
        assignments: ["Unit tests", "Integration tests"],
        resources: [
          { 
            title: "Jest Documentation", 
            type: "article",
            url: "https://jestjs.io/docs/getting-started"
          },
          { 
            title: "Testing Patterns", 
            type: "link",
            url: "https://testing-library.com/docs/react-testing-library/intro/"
          },
        ],
      },
      {
        weekNumber: 12,
        topics: ["Deployment", "CI/CD", "Docker"],
        assignments: ["Deploy MERN app", "Container setup"],
        resources: [
          { 
            title: "Docker Guide", 
            type: "article",
            url: "https://docs.docker.com/get-started/"
          },
          { 
            title: "CI/CD Tutorial", 
            type: "link",
            url: "https://www.atlassian.com/continuous-delivery/ci-vs-cd"
          },
        ],
      },
      {
        weekNumber: 13,
        topics: ["Performance Optimization", "Code Splitting", "Lazy Loading"],
        assignments: ["Performance audit", "Optimization implementation"],
        resources: [
          { 
            title: "Performance Guide", 
            type: "article",
            url: "https://web.dev/fast/"
          },
          { 
            title: "Optimization Tools", 
            type: "link",
            url: "https://developers.google.com/web/tools"
          },
        ],
      },
      {
        weekNumber: 14,
        topics: ["Final Project", "Full Stack Integration", "Documentation"],
        assignments: ["Complete MERN application", "Technical documentation"],
        resources: [
          { 
            title: "Documentation Best Practices", 
            type: "article",
            url: "https://www.writethedocs.org/guide/writing/best-practices/"
          },
          { 
            title: "Project Examples", 
            type: "link",
            url: "https://github.com/enaqx/awesome-react"
          },
        ],
      },
    ],
  },
  {
    title: "ui-ux-design",
    duration: "8 weeks",
    weeks: [
      {
        weekNumber: 1,
        topics: ["Design Thinking", "User Research", "Wireframing"],
        assignments: [
          "Conduct user interviews",
          "Create low-fidelity wireframes",
        ],
        resources: [
          { 
            title: "Design Thinking Guide", 
            type: "article",
            url: "https://www.ideou.com/pages/design-thinking"
          },
          { 
            title: "Wireframing Tools", 
            type: "link",
            url: "https://www.creativebloq.com/wireframes/top-wireframing-tools-11121302"
          },
        ],
      },
      {
        weekNumber: 2,
        topics: ["Prototyping", "User Testing", "Design Systems"],
        assignments: ["Build interactive prototype", "Conduct usability tests"],
        resources: [
          { 
            title: "Figma Tutorials", 
            type: "article",
            url: "https://help.figma.com/hc/en-us/articles/360040514413-Learn-design"
          },
          { 
            title: "Usability Testing Guidelines", 
            type: "link",
            url: "https://www.nngroup.com/articles/usability-testing-101/"
          },
        ],
      },
      {
        weekNumber: 3,
        topics: ["Visual Design", "Color Theory", "Typography"],
        assignments: ["Create a style guide", "Design a landing page"],
        resources: [
          { 
            title: "Color Theory Guide", 
            type: "article",
            url: "https://www.toptal.com/designers/visual/color-theory"
          },
          { 
            title: "Typography Handbook", 
            type: "link",
            url: "https://www.typography.com/"
          },
        ],
      },
      {
        weekNumber: 4,
        topics: ["Interaction Design", "Microinteractions", "Animation"],
        assignments: ["Design interactive elements", "Create animations"],
        resources: [
          { 
            title: "Interaction Design Guide", 
            type: "article",
            url: "https://www.interaction-design.org/literature/topics/interaction-design"
          },
          { 
            title: "Animation Principles", 
            type: "link",
            url: "https://uxdesign.cc/animation-principles-for-the-web-8a7c0c9b4c6a"
          },
        ],
      },
      {
        weekNumber: 5,
        topics: ["User Experience", "Usability", "Accessibility"],
        assignments: [
          "Conduct usability testing",
          "Implement accessibility features",
        ],
        resources: [
          { 
            title: "Usability Heuristics", 
            type: "article",
            url: "https://www.nngroup.com/articles/ten-usability-heuristics/"
          },
          { 
            title: "Accessibility Guidelines", 
            type: "link",
            url: "https://www.w3.org/WAI/standards-guidelines/wcag/"
          },
        ],
      },
      {
        weekNumber: 6,
        topics: ["Design Tools", "Figma", "Sketch", "Adobe XD"],
        assignments: ["Create designs using Figma", "Prototype in Sketch"],
        resources: [
          { 
            title: "Figma Tutorials", 
            type: "article",
            url: "https://help.figma.com/hc/en-us/articles/360040514413-Learn-design"
          },
          { 
            title: "Sketch Documentation", 
            type: "link",
            url: "https://www.sketch.com/docs/"
          },
        ],
      },
      {
        weekNumber: 7,
        topics: ["Design Systems", "Component Libraries", "Design Tokens"],
        assignments: ["Build a design system", "Create reusable components"],
        resources: [
          { 
            title: "Design System Guide", 
            type: "article",
            url: "https://www.designsystems.com/"
          },
          { 
            title: "Component Library Examples", 
            type: "link",
            url: "https://www.smashingmagazine.com/2018/11/pattern-libraries-in-design-systems/"
          },
        ],
      },
      {
        weekNumber: 8,
        topics: ["Final Project", "Portfolio Development", "Case Studies"],
        assignments: [
          "Complete a design project",
          "Develop portfolio case studies",
        ],
        resources: [
          { 
            title: "Portfolio Examples", 
            type: "article",
            url: "https://www.behance.net/search/projects?field=web%20design"
          },
          { 
            title: "Case Study Templates", 
            type: "link",
            url: "https://www.canva.com/templates/case-studies/"
          },
        ],
      },
    ],
  },
  {
    title: "react-advanced",
    duration: "10 weeks",
    weeks: [
      {
        weekNumber: 1,
        topics: [
          "React Advanced Concepts",
          "Higher-Order Components",
          "Render Props",
        ],
        assignments: ["Implement HOCs", "Use render props"],
        resources: [
          { 
            title: "React Documentation", 
            type: "article",
            url: "https://reactjs.org/docs/getting-started.html"
          },
          { 
            title: "Advanced Patterns", 
            type: "link",
            url: "https://reactpatterns.com/"
          },
        ],
      },
      {
        weekNumber: 2,
        topics: ["React Performance", "Memoization", "Reconciliation"],
        assignments: ["Optimize components", "Use React.memo"],
        resources: [
          { 
            title: "Performance Guide", 
            type: "article",
            url: "https://web.dev/fast/"
          },
          { 
            title: "React.memo", 
            type: "link",
            url: "https://reactjs.org/docs/react-api.html#reactmemo"
          },
        ],
      },
      {
        weekNumber: 3,
        topics: ["React Context", "Context API", "Global State Management"],
        assignments: ["Implement Context API", "Manage global state"],
        resources: [
          { 
            title: "Context API Guide", 
            type: "article",
            url: "https://reactjs.org/docs/context.html"
          },
          { 
            title: "State Management Patterns", 
            type: "link",
            url: "https://reactpatterns.com/"
          },
        ],
      },
      {
        weekNumber: 4,
        topics: ["React Suspense", "Code Splitting", "Lazy Loading"],
        assignments: ["Implement Suspense", "Use lazy loading"],
        resources: [
          { 
            title: "Suspense Documentation", 
            type: "article",
            url: "https://reactjs.org/docs/concurrent-mode-suspense.html"
          },
          { 
            title: "Code Splitting Guide", 
            type: "link",
            url: "https://reactjs.org/docs/code-splitting.html"
          },
        ],
      },
      {
        weekNumber: 5,
        topics: ["React Testing", "Jest", "React Testing Library"],
        assignments: ["Write unit tests", "Test components"],
        resources: [
          { 
            title: "Jest Documentation", 
            type: "article",
            url: "https://jestjs.io/docs/getting-started"
          },
          { 
            title: "Testing Library", 
            type: "link",
            url: "https://testing-library.com/docs/react-testing-library/intro/"
          },
        ],
      },
      {
        weekNumber: 6,
        topics: ["React Native", "Mobile Development", "Cross-Platform"],
        assignments: ["Build a mobile app", "Use React Native"],
        resources: [
          { 
            title: "React Native Docs", 
            type: "article",
            url: "https://reactnative.dev/docs/getting-started"
          },
          { 
            title: "Mobile Development Guide", 
            type: "link",
            url: "https://developer.android.com/guide"
          },
        ],
      },
      {
        weekNumber: 7,
        topics: [
          "GraphQL with React",
          "Apollo Client",
          "Queries and Mutations",
        ],
        assignments: ["Integrate GraphQL", "Use Apollo Client"],
        resources: [
          { 
            title: "GraphQL Docs", 
            type: "article",
            url: "https://graphql.org/learn/"
          },
          { 
            title: "Apollo Client Guide", 
            type: "link",
            url: "https://www.apollographql.com/docs/react/"
          },
        ],
      },
      {
        weekNumber: 8,
        topics: ["State Management", "Redux", "MobX"],
        assignments: ["Implement Redux", "Use MobX"],
        resources: [
          { 
            title: "Redux Documentation", 
            type: "article",
            url: "https://redux.js.org/introduction/getting-started"
          },
          { 
            title: "MobX Guide", 
            type: "link",
            url: "https://mobx.js.org/README.html"
          },
        ],
      },
      {
        weekNumber: 9,
        topics: ["React and TypeScript", "Type Safety", "Interfaces"],
        assignments: ["Use TypeScript with React", "Define interfaces"],
        resources: [
          { 
            title: "TypeScript Docs", 
            type: "article",
            url: "https://www.typescriptlang.org/docs/"
          },
          { 
            title: "React TypeScript Guide", 
            type: "link",
            url: "https://react-typescript-cheatsheet.netlify.app/"
          },
        ],
      },
      {
        weekNumber: 10,
        topics: ["Final Project", "Advanced React Application", "Deployment"],
        assignments: ["Build an advanced React app", "Deploy the app"],
        resources: [
          { 
            title: "Deployment Guide", 
            type: "article",
            url: "https://vercel.com/docs"
          },
          { 
            title: "Project Examples", 
            type: "link",
            url: "https://github.com/enaqx/awesome-react"
          },
        ],
      },
    ],
  },
  {
    title: "full-stack",
    duration: "16 weeks",
    weeks: [
      {
        weekNumber: 1,
        topics: ["HTML & CSS Basics", "Responsive Design", "Bootstrap"],
        assignments: [
          "Create a responsive webpage",
          "Use Bootstrap components",
        ],
        resources: [
          { 
            title: "HTML Guide", 
            type: "article",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTML"
          },
          { 
            title: "Bootstrap Documentation", 
            type: "link",
            url: "https://getbootstrap.com/docs/"
          },
        ],
      },
      {
        weekNumber: 2,
        topics: ["JavaScript Fundamentals", "ES6+", "DOM Manipulation"],
        assignments: ["JavaScript exercises", "DOM projects"],
        resources: [
          { 
            title: "JavaScript Guide", 
            type: "article",
            url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          },
          { 
            title: "ES6 Features", 
            type: "link",
            url: "https://www.w3schools.com/js/js_es6.asp"
          },
        ],
      },
      {
        weekNumber: 3,
        topics: ["Version Control", "Git Basics", "GitHub"],
        assignments: ["Git workflow practice", "Collaborative project"],
        resources: [
          { 
            title: "Git Documentation", 
            type: "article",
            url: "https://git-scm.com/doc"
          },
          { 
            title: "GitHub Guides", 
            type: "link",
            url: "https://guides.github.com/"
          },
        ],
      },
      {
        weekNumber: 4,
        topics: ["Node.js Basics", "Express.js", "REST APIs"],
        assignments: ["Build a REST API", "Use Express.js"],
        resources: [
          { 
            title: "Node.js Docs", 
            type: "article",
            url: "https://nodejs.org/en/docs/"
          },
          { 
            title: "Express Guide", 
            type: "link",
            url: "https://expressjs.com/en/guide/routing.html"
          },
        ],
      },
      {
        weekNumber: 5,
        topics: ["Database Fundamentals", "SQL", "NoSQL"],
        assignments: ["Database design", "CRUD operations"],
        resources: [
          { 
            title: "SQL Guide", 
            type: "article",
            url: "https://www.w3schools.com/sql/"
          },
          { 
            title: "NoSQL Patterns", 
            type: "link",
            url: "https://www.mongodb.com/nosql-explained"
          },
        ],
      },
      {
        weekNumber: 6,
        topics: ["Authentication", "JWT", "OAuth"],
        assignments: ["Implement JWT", "Use OAuth"],
        resources: [
          { 
            title: "JWT Guide", 
            type: "article",
            url: "https://jwt.io/introduction/"
          },
          { 
            title: "OAuth Documentation", 
            type: "link",
            url: "https://oauth.net/documentation/"
          },
        ],
      },
      {
        weekNumber: 7,
        topics: ["React Basics", "Components", "State Management"],
        assignments: ["Build React components", "Manage state"],
        resources: [
          { 
            title: "React Documentation", 
            type: "article",
            url: "https://reactjs.org/docs/getting-started.html"
          },
          { 
            title: "State Management Guide", 
            type: "link",
            url: "https://reactpatterns.com/"
          },
        ],
      },
      {
        weekNumber: 8,
        topics: ["React Advanced", "Hooks", "Context API"],
        assignments: ["Use React Hooks", "Implement Context API"],
        resources: [
          { 
            title: "Hooks Guide", 
            type: "article",
            url: "https://reactjs.org/docs/hooks-reference.html"
          },
          { 
            title: "Context API Documentation", 
            type: "link",
            url: "https://reactjs.org/docs/context.html"
          },
        ],
      },
      {
        weekNumber: 9,
        topics: ["Redux", "Actions", "Reducers", "Store"],
        assignments: ["Implement Redux", "Manage state with Redux"],
        resources: [
          { 
            title: "Redux Documentation", 
            type: "article",
            url: "https://redux.js.org/introduction/getting-started"
          },
          { 
            title: "Redux Toolkit", 
            type: "link",
            url: "https://redux-toolkit.js.org/"
          },
        ],
      },
      {
        weekNumber: 10,
        topics: ["Testing", "Jest", "React Testing Library"],
        assignments: ["Write unit tests", "Test React components"],
        resources: [
          { 
            title: "Jest Documentation", 
            type: "article",
            url: "https://jestjs.io/docs/getting-started"
          },
          { 
            title: "Testing Library", 
            type: "link",
            url: "https://testing-library.com/docs/react-testing-library/intro/"
          },
        ],
      },
      {
        weekNumber: 11,
        topics: ["GraphQL", "Apollo Client", "Queries and Mutations"],
        assignments: ["Integrate GraphQL", "Use Apollo Client"],
        resources: [
          { 
            title: "GraphQL Docs", 
            type: "article",
            url: "https://graphql.org/learn/"
          },
          { 
            title: "Apollo Client Guide", 
            type: "link",
            url: "https://www.apollographql.com/docs/react/"
          },
        ],
      },
      {
        weekNumber: 12,
        topics: ["Web Security", "HTTPS", "CORS"],
        assignments: ["Implement HTTPS", "Handle CORS"],
        resources: [
          { 
            title: "Web Security Guide", 
            type: "article",
            url: "https://owasp.org/www-project-top-ten/"
          },
          { 
            title: "CORS Documentation", 
            type: "link",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"
          },
        ],
      },
      {
        weekNumber: 13,
        topics: ["Performance Optimization", "Code Splitting", "Lazy Loading"],
        assignments: ["Optimize performance", "Implement lazy loading"],
        resources: [
          { 
            title: "Performance Guide", 
            type: "article",
            url: "https://web.dev/fast/"
          },
          { 
            title: "Optimization Tools", 
            type: "link",
            url: "https://developers.google.com/web/tools"
          },
        ],
      },
      {
        weekNumber: 14,
        topics: ["CI/CD", "Docker", "Deployment"],
        assignments: ["Set up CI/CD", "Use Docker"],
        resources: [
          { 
            title: "CI/CD Guide", 
            type: "article",
            url: "https://www.atlassian.com/continuous-delivery/ci-vs-cd"
          },
          { 
            title: "Docker Documentation", 
            type: "link",
            url: "https://docs.docker.com/get-started/"
          },
        ],
      },
      {
        weekNumber: 15,
        topics: ["Serverless Architecture", "AWS Lambda", "Azure Functions"],
        assignments: ["Build serverless functions", "Deploy to AWS/Azure"],
        resources: [
          { 
            title: "AWS Lambda Guide", 
            type: "article",
            url: "https://docs.aws.amazon.com/lambda/latest/dg/welcome.html"
          },
          { 
            title: "Azure Functions Documentation", 
            type: "link",
            url: "https://docs.microsoft.com/en-us/azure/azure-functions/"
          },
        ],
      },
      {
        weekNumber: 16,
        topics: ["Final Project", "Full Stack Application", "Deployment"],
        assignments: ["Build a full stack app", "Deploy the app"],
        resources: [
          { 
            title: "Deployment Guide", 
            type: "article",
            url: "https://vercel.com/docs"
          },
          { 
            title: "Project Examples", 
            type: "link",
            url: "https://github.com/enaqx/awesome-react"
          },
        ],
      },
    ],
  },
];
