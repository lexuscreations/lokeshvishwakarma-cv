import "./resumeRight.css";
import Projects from "./components/Projects/Projects.jsx";
import Languages from "./components/Languages/Languages.jsx";
import Interests from "./components/Interests/Interests.jsx";
import Experience from "./components/Experience/Experience.jsx";
import SkillsRating from "./components/SkillsRating/SkillsRating.jsx";
import CertificateAndCourses from "./components/CertificateAndCourses/CertificateAndCourses.jsx";

const ResumeRight = () => {
  return (
    <div className="resume__right">
      <Experience />
      <CertificateAndCourses />
      <Languages />
      <Interests />
      <SkillsRating />
      <Projects />
    </div>
  );
};

export default ResumeRight;
