export interface CourseModule {
  title: string;
  lessons: string[];
}

export interface Course {
  slug: string;
  badge: string;
  badgeColor: string;
  title: string;
  description: string;
  duration?: string;
  lessons?: number;
  level?: string;
  stars?: number;
  reviews?: number;
  priceOriginal?: number;
  priceDiscounted?: number;
  currency: string;
  cta: string;
  stripePriceId: string | null;
  comingSoon: boolean;
  instructor: {
    name: string;
    bio: string;
    avatar: string;
  };
  curriculum: CourseModule[];
  longDescription: string;
}

export const courses: Course[] = [
  {
    slug: "html-css",
    badge: "🔥 Bestseller",
    badgeColor: "orange",
    title: "HTML & CSS Mastery",
    description:
      "Build your first responsive website from scratch. Master Flexbox, Grid, and modern CSS in 4 hours.",
    duration: "4.5 hours",
    lessons: 32,
    level: "Beginner",
    stars: 4.9,
    reviews: 847,
    priceOriginal: 99,
    priceDiscounted: 49,
    currency: "USD",
    cta: "Enroll Now — $49",
    stripePriceId: "price_HTML_PLACEHOLDER",
    comingSoon: false,
    instructor: {
      name: "Alex Rivera",
      bio: "Senior Engineer at Meta. 8 years teaching online. 50,000+ students taught.",
      avatar: "https://i.pravatar.cc/150?img=68",
    },
    longDescription:
      "Go from zero HTML knowledge to building stunning, responsive websites. This course covers semantic HTML5, modern CSS3, Flexbox, CSS Grid, animations, responsive design principles, and real-world deployment. By the end, you'll have a professional portfolio site live on the internet.",
    curriculum: [
      {
        title: "Module 1: HTML Foundations",
        lessons: [
          "What is HTML? Your First Web Page",
          "Elements, Tags, and Attributes",
          "Structuring Content with Semantic HTML",
        ],
      },
      {
        title: "Module 2: CSS Fundamentals",
        lessons: [
          "Selectors, Properties, and the Cascade",
          "The Box Model Deep Dive",
          "Typography and Color Systems",
        ],
      },
      {
        title: "Module 3: Layout Mastery",
        lessons: [
          "Flexbox — Build Any Layout",
          "CSS Grid — Two-Dimensional Layouts",
          "Responsive Design with Media Queries",
        ],
      },
      {
        title: "Module 4: Modern CSS Techniques",
        lessons: [
          "CSS Variables and Custom Properties",
          "Animations and Transitions",
          "CSS Architecture and Best Practices",
        ],
      },
      {
        title: "Module 5: Final Project — Build & Deploy",
        lessons: [
          "Planning Your Portfolio Site",
          "Building the Portfolio from Scratch",
          "Deploying to the Web with Vercel",
        ],
      },
    ],
  },
  {
    slug: "python",
    badge: "✨ New",
    badgeColor: "cyan",
    title: "Python for Beginners",
    description:
      "The world's most loved language, taught simply. Build automation scripts, data tools, and AI projects.",
    duration: "6 hours",
    lessons: 48,
    level: "Beginner",
    stars: 4.8,
    reviews: 312,
    priceOriginal: 59,
    currency: "USD",
    cta: "Enroll Now — $59",
    stripePriceId: "price_PYTHON_PLACEHOLDER",
    comingSoon: false,
    instructor: {
      name: "Alex Rivera",
      bio: "Senior Engineer at Meta. 8 years teaching online. 50,000+ students taught.",
      avatar: "https://i.pravatar.cc/150?img=68",
    },
    longDescription:
      "Start from absolute zero and become confident writing Python. This course covers variables, data types, control flow, functions, OOP, file handling, APIs, and automation. You'll build real projects including a web scraper, a data dashboard, and an AI chatbot.",
    curriculum: [
      {
        title: "Module 1: Python Basics",
        lessons: [
          "Installing Python and Your First Script",
          "Variables, Data Types, and Operators",
          "Input, Output, and String Formatting",
        ],
      },
      {
        title: "Module 2: Control Flow & Functions",
        lessons: [
          "If/Else and Conditional Logic",
          "Loops — For and While",
          "Writing Reusable Functions",
        ],
      },
      {
        title: "Module 3: Data Structures",
        lessons: [
          "Lists, Tuples, and Sets",
          "Dictionaries and Data Modeling",
          "List Comprehensions and Generators",
        ],
      },
      {
        title: "Module 4: Real-World Python",
        lessons: [
          "File Handling and CSV Processing",
          "Working with APIs (requests library)",
          "Introduction to Object-Oriented Programming",
        ],
      },
      {
        title: "Module 5: Final Project — Build & Deploy",
        lessons: [
          "Project Planning: Automation Bot",
          "Building the Bot Step by Step",
          "Testing, Packaging, and Deployment",
        ],
      },
    ],
  },
  {
    slug: "javascript",
    badge: "🔜 Coming Soon",
    badgeColor: "slate",
    title: "JavaScript Deep Dive",
    description:
      "Master the language of the web. DOM manipulation, async/await, APIs, and modern ES2024+ features.",
    currency: "USD",
    cta: "Join Waitlist",
    stripePriceId: null,
    comingSoon: true,
    instructor: {
      name: "Alex Rivera",
      bio: "Senior Engineer at Meta. 8 years teaching online. 50,000+ students taught.",
      avatar: "https://i.pravatar.cc/150?img=68",
    },
    longDescription:
      "The ultimate JavaScript course is coming soon. Master the language of the web from fundamentals to advanced patterns. DOM manipulation, async programming, APIs, modules, and the latest ES2024+ features — all through hands-on projects.",
    curriculum: [
      {
        title: "Module 1: JavaScript Fundamentals",
        lessons: [
          "Variables, Types, and Operators",
          "Functions and Scope",
          "Arrays and Objects",
        ],
      },
      {
        title: "Module 2: DOM Manipulation",
        lessons: [
          "Selecting and Modifying Elements",
          "Event Handling",
          "Building Interactive UIs",
        ],
      },
      {
        title: "Module 3: Async JavaScript",
        lessons: [
          "Callbacks and Promises",
          "Async/Await Patterns",
          "Fetching Data from APIs",
        ],
      },
      {
        title: "Module 4: Modern JavaScript",
        lessons: [
          "ES Modules and Bundling",
          "Error Handling and Debugging",
          "Design Patterns in JS",
        ],
      },
      {
        title: "Module 5: Final Project",
        lessons: [
          "Project Planning: Full-Stack App",
          "Building the Frontend",
          "Connecting to a Backend API",
        ],
      },
    ],
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}
