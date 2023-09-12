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
  experienceData: [
    {
      designation: "Full Stack Developer",
      duration: "From June 2021 to - Present (2 years) | ",
      company_name: "Qloron Pvt Ltd",
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
  projectsData: [
    {
      name: "Mausam | The Weather App",
      visitLink: "https://github.com/lexuscreations/mausam-weather-app",
      Description: () => (
        <>
          A user-friendly weather app built with <b>React.js</b>, offering a
          modern dark theme UI with eye-catching colors.
        </>
      ),
      keyFeatures: [
        "Select options Enter city, use current location or select Pick my Ip",
        "Toggle between Fahrenheit and Celsius",
        "View temperature, humidity, feels like, air quality index",
        "Dynamic weather image based on current conditions",
        "Sunrise & Sunset times, visibility, wind speed, pressure",
        "5 to 7-day forecast and today's whole day forecast",
      ],
      note: "",
    },
    {
      name: "Lexus-YT-Pro | YouTube Chrome Extension",
      visitLink: "https://github.com/lexuscreations/lexus-youtube-extension",
      Description: () => (
        <>
          A <b>JavaScript-based Google Chrome extension</b> designed to enhance
          your YouTube experience:
        </>
      ),
      keyFeatures: [
        "Remove, block, and skip all types of YouTube ads",
        "Picture-in-picture mode for multitasking",
        "Adjustable video playback speed (0.10x to 5x)",
        "Track skipped ads count for today, this week, and this month",
      ],
      note: "Note: This project is for learning purposes only.",
    },
    {
      name: "Instagram Clone",
      visitLink: "https://github.com/lexuscreations?tab=repositories",
      Description: () => (
        <>
          A feature-rich Instagram clone built with <b>React Native</b>,
          Node.js, MongoDB, Express.js, and Socket.io.
        </>
      ),
      keyFeatures: [
        "Real-time chat with file sharing (P2P share option as well)",
        "Advanced functionalities, optimised, follow-unfollow, one to one and group chat",
        "Two versions: Expo and react-native-cli",
      ],
      note: "",
    },
  ],
  projectsDataShort: [
    {
      name: "Mausam | The Weather App",
      visitLink: "https://github.com/lexuscreations/mausam-weather-app",
      Description: () => (
        <>
          A user-friendly weather app built with <b>React.js</b>, offering a
          modern dark theme UI with eye-catching colors.
        </>
      ),
      keyFeatures: [
        "Select location options, Enter city, current location, Pick My Ip, with temperature units toggle",
        "View Dynamic weather imagery, temperature, humidity, feels like, air quality index",
        "Sunrise/sunset, windSpeed, pressure, visibility, 5-7 days + whole day forecasts.",
      ],
      note: "",
    },
    {
      name: "Lexus-YT-Pro | YouTube Chrome Extension",
      visitLink: "https://github.com/lexuscreations/lexus-youtube-extension",
      Description: () => (
        <>
          A <b>JavaScript-based Google Chrome extension</b> designed to enhance
          your YouTube experience: (for learning purposes only)
        </>
      ),
      keyFeatures: [
        "Remove all types of YouTube ads with Picture-in-picture feature",
        "Adjustable video playback speed (0.10x to 5x)",
        "Track skipped ads count for today, this week, and this month",
      ],
    },
    {
      name: "Instagram Clone",
      visitLink: "https://github.com/lexuscreations?tab=repositories",
      Description: () => (
        <>
          A feature-rich Instagram clone built with <b>React Native</b>,
          Node.js, MongoDB, Express.js, and Socket.io.
        </>
      ),
      keyFeatures: [
        "Real-time chat with file sharing (P2P share option as well)",
        "Advanced functionalities, optimised, follow-unfollow, one to one and group chat",
        "Two versions: Expo and react-native-cli",
      ],
      note: "",
    },
  ],
};
