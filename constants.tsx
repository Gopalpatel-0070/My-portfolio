
import { Project, Experience, Education, Achievement, Skill, SkillCategory } from './types';

export const RESUME_DATA = {
  name: "Gopal Patel",
  role: "Aspiring Java Full Stack Developer",
  tagline: "Building scalable web solutions with a focus on performance and user experience.",
  location: "Lucknow, Uttar Pradesh",
  contact: {
    email: "patelgopal563@gmail.com",
    phone: "+91-7905013678",
    github: "https://github.com/Gopalpatel-0070", // Placeholder
    linkedin: "https://www.linkedin.com/in/gopal-patel2004/", // Placeholder
    leetcode: "https://leetcode.com/u/gopalpatel200/", // Placeholder
  },
  about: "Aspiring Computer Science Engineer with hands-on experience in Java Full Stack Development, problem-solving, and building scalable applications. I am passionate about web technologies, REST APIs, and Agile methodologies. My journey is driven by a constant hunger for learning and a goal to contribute to dynamic organizations by solving complex real-world problems through code.",
};

export const PROJECTS: Project[] = [
  {
    title: "Agro-Vision",
    type: "Agriculture Platform",
    description: "A comprehensive digital agriculture platform designed to bridge the gap between farmers and merchants, ensuring fair pricing and direct market access.",
    features: [
      "Dedicated Farmer and Merchant dashboards",
      "Real-time product listing and inventory management",
      "Integrated secure payment and transaction workflows",
      "Optimized transportation and logistics tracking"
    ],
    tech: ["React", "Spring Boot", "Java", "MongoDB", "REST APIs"],
    link: "/agro-vision-demo",
  },
  {
    title: "StreetPaws",
    type: "Pet Adoption Application",
    description: "A compassionate platform aimed at helping street animals find forever homes by connecting adopters, shelters, and volunteers.",
    features: [
      "Filterable browsing for adoptable pets",
      "Detailed pet profiles with history and imagery",
      "Seamless adoption request and tracking system",
      "Directory for NGOs and verified animal shelters"
    ],
    tech: ["React", "Node.js", "Firebase", "Tailwind CSS"],
    github: "#",
    link: "/streetpaws-demo",
  },
  {
    title: "AQI Checker",
    type: "Environmental Utility",
    description: "A real-time Air Quality Index tracker that fetches environmental data to raise health awareness.",
    features: [
      "Real-time data fetching from public environmental APIs",
      "Visual health impact metrics (e.g., cigarette equivalence)",
      "Location-based air quality reporting"
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Public APIs"],
    link: "#",
  },
  {
    title: "Healthy Corner",
    type: "Health & Wellness",
    description: "A user-centric website focused on delivering personalized health tips, wellness blogs, and goal tracking.",
    features: [
      "Engaging wellness content delivery",
      "Personalized daily health tips and blogging engine",
      "Progress tracking for health goals"
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    link: "#",
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Java Full Stack Developer Intern",
    company: "Softpro India Computer Technologies Pvt. Ltd.",
    period: "June 2025 – August 2025",
    location: "Lucknow, UP",
    points: [
      "Developed a web-based platform for farmers and merchants to trade agricultural products online.",
      "Integrated secure payment systems and optimized transportation workflows, reducing logistical issues.",
      "Designed intuitive dashboards for product and order management with real-time updates.",
      "Improved accessibility and reliability of transactions, enhancing user satisfaction."
    ]
  }
];

export const EDUCATIONS: Education[] = [
  {
    institution: "Goel Institute of Technology and Management",
    degree: "B.Tech - Computer Science and Engineering",
    period: "09 2022 – 06 2026",
    score: "CGPA - 8.66",
    location: "Lucknow, Uttar Pradesh"
  },
  {
    institution: "Children Public Intermediate College",
    degree: "Class 12th",
    period: "04 2021 – 06 2022",
    score: "Percentage - 85%",
    location: "Kushinagar, Uttar Pradesh"
  },
  {
    institution: "Children Public Intermediate College",
    degree: "Class 10th",
    period: "04 2019 – 06 2020",
    score: "Percentage - 90.8%",
    location: "Kushinagar, Uttar Pradesh"
  }
];

export const SKILLS: Skill[] = [
  { name: "Java", category: SkillCategory.Backend },
  { name: "SQL", category: SkillCategory.Databases },
  { name: "ReactJS", category: SkillCategory.Frontend },
  { name: "JavaScript", category: SkillCategory.Frontend },
  { name: "Spring Boot", category: SkillCategory.Backend },
  { name: "MongoDB", category: SkillCategory.Databases },
  { name: "HTML5 & CSS3", category: SkillCategory.Frontend },
  { name: "Git & GitHub", category: SkillCategory.Tools },
  { name: "VS Code", category: SkillCategory.Tools },
  { name: "REST APIs", category: SkillCategory.Others },
  { name: "Agile Methodologies", category: SkillCategory.Others },
  { name: "Problem Solving", category: SkillCategory.Others }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Certificate of Outstanding Performance",
    organization: "Softpro India Computer Technologies Pvt. Ltd.",
    date: "Jul 2025",
    detail: "Awarded for exceptional performance during the Java Full Stack Internship."
  },
  {
    title: "Mastering Data Structures and Algorithms",
    organization: "LearnYard",
    date: "Feb 2025",
    detail: "Completed intensive training on advanced DSA concepts."
  },
  {
    title: "Medhavi Chhatra Samman Award",
    organization: "District Administration, Kushinagar",
    date: "May 2020 & June 2022",
    detail: "District Topper in both 10th & 12th Board Examinations."
  }
];
