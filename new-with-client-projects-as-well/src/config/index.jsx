export const html2pdf_Config = {
  margin: 0,
  filename: "LokeshVishwakarma_CV.pdf",
  image: { type: "jpeg", quality: 0.98 },
  html2canvas: { scale: 5 },
  jsPDF: { format: "a4", orientation: "portrait" },
};

import profileImg from "../assets/img/profilePic.jpg";
import {
  FaChalkboardTeacher,
  FaPencilRuler,
  FaPuzzlePiece,
} from "react-icons/fa";
import { SiHackerrank } from "react-icons/si";
import { TbBrandLeetcode } from "react-icons/tb";
import { BiLogoGmail, BiPhone } from "react-icons/bi";
import { BiLogoGithub, BiLogoLinkedinSquare, BiMapAlt } from "react-icons/bi";

export const APP_CONFIG = {
  add_intentionally_CV_adjust_class_on_body_for_testing: false,
};

export const RESUME_DATA = {
  profileImg,
  profileName: {
    firstName: "Lokesh",
    lastName: "Vishwakarma",
  },
  designation: "Software Engineer",
  connect: [
    {
      value: "Bhopal, Madhya Pradesh, India",
      href: `https://www.google.com/maps/place/Bhopal,Madhya%20Pradesh,India`,
      icon: BiMapAlt,
    },
    {
      value: "lokeshvishwakarma2611@gmail.com",
      href: `mailto:lokeshvishwakarma2611@gmail.com`,
      icon: BiLogoGmail,
    },
    {
      value: "LinkedIn DM",
      href: `https://www.linkedin.com/in/lokeshvishwakarma/`,
      icon: BiPhone,
    },
  ],
  contact: {
    linkedin: `https://www.linkedin.com/in/lokeshvishwakarma/`,
    linkedinIcon: BiLogoLinkedinSquare,
  },
  social: [
    {
      link: `https://github.com/lexuscreations/`,
      icon: BiLogoGithub,
    },
    {
      link: `https://leetcode.com/lexuscreations/`,
      icon: TbBrandLeetcode,
    },
    {
      link: `https://www.hackerrank.com/lokeshvishwakar1/`,
      icon: SiHackerrank,
    },
  ],
  profile__description: [
    `[M.E.R.N] | SDE`,
    `Full Stack Developer At Qloron Pvt. Ltd.`,
    `[ SQL | MongoDB ]`,
  ],
  education: {
    first: {
      instituteName: "Sam Global University, Bhopal",
      website: "http://www.saminstitutions.com/",
      courseName: "B.C.A",
      tenure: "2018 - 2021",
    },
    second: {
      instituteName: "NCEC affiliated by MCU, Bhopal",
      website: "http://www.ncecbhopal.com/",
      courseName: "Hardware and Networking",
      tenure: "2015 - 2017",
    },
    third: {
      instituteName: "MVM School, Bhopal",
      website: "https://www.maharishividyamandir.com/",
      courseName: "HSC",
      tenure: "2017",
    },
  },
  skills: {
    firstRow: [{ name: "HTML" }, { name: "CSS" }, { name: "JavaScript" }],
    secondRow: [
      { name: "React.js" },
      { name: "Next.js", percent: "30%" },
      { name: "ReactNative", percent: "50%" },
    ],
    thirdRow: [{ name: "Express.js" }, { name: "Node.js" }],
  },
  // skillsShort: {
  //   secondRow: [
  //     { name: "React.js", percent: "80%" },
  //     { name: "Express.js", percent: "70%" },
  //     { name: "Next.js", percent: "30%" },
  //     { name: "ReactNative", percent: "50%" },
  //   ],
  // },
  experienceData: [
    {
      designation: "Full Stack Developer [M.E.R.N]",
      duration: "From June 2021 to - Present (2 years)",
      company_name: "Qloron Pvt Ltd",
      company_url: "https://qloron.com/",
      company_location: "Nagpur, Maharashtra, India",
    },
  ],
  certificatesData: [
    {
      Icon: ({ classNameAdditional, size }) => (
        <SiHackerrank className={classNameAdditional} size={size} />
      ),
      certificatesOf: "SQL",
      certificatesProvider: "HackerRank",
    },
    {
      Icon: ({ classNameAdditional }) => (
        <div className={`custom-great-learning-icon ${classNameAdditional}`}>
          G
        </div>
      ),
      certificatesOf: "DevOps",
      certificatesProvider: "Great Learning",
    },
  ],
  courseData: [
    {
      Icon: ({ classNameAdditional }) => (
        <div className={`custom-simplilearn-icon ${classNameAdditional}`}>
          Simpl<span>i</span>learn
        </div>
      ),
      courseOf: "Agile Foundation",
      courseProvider: "Simplilearn",
    },
    {
      Icon: ({ classNameAdditional }) => (
        <div className={`custom-learntube-icon ${classNameAdditional}`}>
          <div className="triangle1"></div>
          <div className="triangle2"></div>
        </div>
      ),
      courseOf: "Git, Github Advance",
      courseProvider: "CareerNinja",
    },
  ],
  language: [
    { language: "English", proficiency: "(Professional Working)" },
    { language: "Hindi", proficiency: "(Native or Bilingual)" },
  ],
  interest: [
    {
      skillName: "Teaching Mentoring",
      icon: FaChalkboardTeacher,
      website: "https://www.youtube.com/@lexuscreations5805/",
    },
    {
      skillName: "Personal Projects",
      icon: FaPencilRuler,
      website: `https://github.com/lexuscreations/`,
    },
    {
      skillName: "Problem Solving",
      icon: FaPuzzlePiece,
      website: "https://leetcode.com/lexuscreations/",
    },
  ],
  skillsRatingData: [
    { skill_name: "HTML, CSS, JS", skillPercent: "90%" },
    { skill_name: "ReactNative", skillPercent: "50%" },
    { skill_name: "NextJS", skillPercent: "30%" },
    { skill_name: "Remaining", skillPercent: "70%" },
  ],
  personalProjectsData: [
    {
      name: "Mausam | The Weather App",
      visitLink: "https://github.com/lexuscreations/mausam-weather-app",
      Description: () => (
        <>
          <b>React.js</b>, complete functionality, responsive, modern UI, dark /
          light theme.
        </>
      ),
      keyFeatures: [
        "Choose city, current location, or IP location. Toggle Fahrenheit / Celsius. Temperature, humidity, feels like, air quality index, dynamic image, sunrise & sunset, visibility, wind speed, pressure, 7-day forecasts",
      ],
      note: "",
    },
    {
      name: "Lexus-ads-Pro | Chrome Extension",
      visitLink: "https://github.com/lexuscreations/lexus-youtube-extension",
      Description: () => (
        <>
          <b>Chrome extension</b> designed to enhance your browsing experience:
        </>
      ),
      keyFeatures: [
        "Block all website and YouTube ads, with Picture-in-picture, speed (0.10x to 5x), skipped ads count",
      ],
      note: "Note: This project is for learning purposes only.",
    },
    {
      name: "Instagram Clone | Android",
      visitLink: "",
      Description: () => (
        <>
          <b>React Native</b>, Node.js, MongoDB, Express.js, and Socket.io.
        </>
      ),
      keyFeatures: [
        "Real-time chat with file sharing (P2P), (follow-unfollow, group + one-to-one chat), available in both: Expo and react-native-cli.",
      ],
      note: "",
    },
  ],
  personalProjectsDataForDownloadCV: [
    {
      name: "Mausam | The Weather App",
      visitLink: "https://github.com/lexuscreations/mausam-weather-app",
      Description: () => (
        <>
          <b>React.js</b>, complete functionality, responsive, modern UI, dark /
          light theme.
        </>
      ),
      keyFeatures: [
        "Choose city, current location, or IP location. Toggle Fahrenheit / Celsius. Temperature, humidity, feels like, air quality index, dynamic image, sunrise & sunset, visibility, wind speed, pressure, 7-day forecasts",
      ],
      note: "",
    },
    {
      name: "Lexus-ads-Pro | Chrome Extension",
      visitLink: "https://github.com/lexuscreations/lexus-youtube-extension",
      Description: () => (
        <>
          <b>Chrome extension</b> designed to enhance your browsing experience:
        </>
      ),
      keyFeatures: [
        "Block all website and YouTube ads, with Picture-in-picture, speed (0.10x to 5x), skipped ads count",
      ],
      note: "Note: This project is for learning purposes only.",
    },
    {
      name: "Instagram Clone | Android",
      visitLink: "",
      Description: () => (
        <>
          <b>React Native</b>, Node.js, MongoDB, Express.js, and Socket.io.
        </>
      ),
      keyFeatures: [
        "Real-time chat with file sharing (P2P), (follow-unfollow, group + one-to-one chat), available in both: Expo and react-native-cli.",
      ],
      note: "",
    },
  ],
  projectsData: [
    {
      name: "Skyline - E-Commerce | MERN",
      teamSize: "3",
      visitLink: ["https://skyline.in/"],
      Description: () => (
        <>
          <b>Position/Module:</b> Data Analytics and Insights
        </>
      ),
      keyFeatures: [
        "User Activity Tracking (UAT) Frontend Implementation: Developed the user interface for tracking user activities on the Skyline E-Commerce platform, enabling real-time monitoring of customer interactions and behaviors.",
        "Customer Behavior Analysis (CBA) Backend Implementation: Designed and implemented the backend systems for customer behavior analysis, including data processing and analysis algorithms to gain valuable insights into customer preferences and trends.",
      ],
    },
    {
      name: "MEA-Platform - Logistics Insurance Company | MERN",
      teamSize: "6",
      visitLink: ["https://www.meaplatform.com/"],
      Description: () => (
        <>
          <b>Position/Module:</b> Performance Optimization
        </>
      ),
      keyFeatures: [
        "Enhanced Performance: As a Performance Engineer, I implemented optimizations across the MEA-Platform, including MongoDB, Node.js + Express.js, and React.js, resulting in significantly improved system efficiency and user experience.",
        "Streamlined Data Handling: Leveraged Node.js stream processing, child processes, and data compression techniques to enhance data management, reducing latency and ensuring secure data transfer.",
      ],
    },
    {
      name: "Sortbox - HRM Software | MERN",
      teamSize: "7",
      Description: () => (
        <>
          <b>Position/Module:</b> Senior Team Lead
        </>
      ),
      keyFeatures: [
        "Led Development Efforts: Provided leadership for a cross-functional team in the design, development, and deployment of Sortbox, a comprehensive HRM software solution.",
        "Mentored and Collaborated: Mentored 5-6 developers, including interns, in both backend (Express and MySQL) and frontend aspects, while also contributing to the creation of tracking extensions and managing socket-based notifications for live monitoring.",
      ],
    },
  ],
  projectsDataForDownloadCV: [
    {
      name: "Skyline - E-Commerce | MERN",
      teamSize: "3",
      visitLink: ["https://skyline.in/"],
      Description: () => (
        <>
          <b>Position/Module:</b> Data Analytics and Insights
        </>
      ),
      keyFeatures: [
        "User Activity Tracking (UAT) Frontend Implementation: Developed the user interface for tracking user activities on the Skyline E-Commerce platform, enabling real-time monitoring of customer interactions and behaviors.",
        "Customer Behavior Analysis (CBA) Backend Implementation: Designed and implemented the backend systems for customer behavior analysis, including data processing and analysis algorithms to gain valuable insights into customer preferences and trends.",
      ],
    },
    {
      name: "MEA-Platform - Logistics Insurance Company | MERN",
      teamSize: "6",
      visitLink: ["https://www.meaplatform.com/"],
      Description: () => (
        <>
          <b>Position/Module:</b> Performance Optimization
        </>
      ),
      keyFeatures: [
        "Enhanced Performance: As a Performance Engineer, I implemented optimizations across the MEA-Platform, including MongoDB, Node.js + Express.js, and React.js, resulting in significantly improved system efficiency and user experience.",
        "Streamlined Data Handling: Leveraged Node.js stream processing, child processes, and data compression techniques to enhance data management, reducing latency and ensuring secure data transfer.",
      ],
    },
    {
      name: "Sortbox - HRM Software | MERN",
      teamSize: "7",
      Description: () => (
        <>
          <b>Position/Module:</b> Senior Team Lead
        </>
      ),
      keyFeatures: [
        "Led Development Efforts: Provided leadership for a cross-functional team in the design, development, and deployment of Sortbox, a comprehensive HRM software solution.",
        "Mentored and Collaborated: Mentored 5-6 developers, including interns, in both backend (Express and MySQL) and frontend aspects, while also contributing to the creation of tracking extensions and managing socket-based notifications for live monitoring.",
      ],
    },
  ],
};
