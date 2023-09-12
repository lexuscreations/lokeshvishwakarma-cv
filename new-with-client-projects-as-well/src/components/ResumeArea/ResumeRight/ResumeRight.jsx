import "./resumeRight.css";
import { useSelector } from "react-redux";
import Projects from "./components/Projects/Projects.jsx";
import Languages from "./components/Languages/Languages.jsx";
import Interests from "./components/Interests/Interests.jsx";
import Experience from "./components/Experience/Experience.jsx";
import SkillsRating from "./components/SkillsRating/SkillsRating.jsx";
import PersonalProjects from "./components/PersonalProjects/PersonalProjects.jsx";
import CertificateAndCourses from "./components/CertificateAndCourses/CertificateAndCourses.jsx";

const ResumeRight = () => {
  const { isAdjusting } = useSelector((state) => state.isAdjusting);

  return (
    <div className="resume__right">
      {!isAdjusting && <Experience />}
      <CertificateAndCourses />
      <Languages />
      <Interests />
      <SkillsRating />
      <PersonalProjects />
      <Projects />
    </div>
  );
};

export default ResumeRight;
