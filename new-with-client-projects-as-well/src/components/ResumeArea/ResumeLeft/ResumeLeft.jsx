import "./resumeLeft.css";
import { useSelector } from "react-redux";
import Home from "./components/Home/Home.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Social from "./components/Social/Social.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Education from "./components/Education/Education.jsx";
import Experience from "../ResumeRight/components/Experience/Experience.jsx";

const ResumeLeft = ({ handleGenerateCV }) => {
  const { isAdjusting } = useSelector((state) => state.isAdjusting);

  return (
    <div className="resume__left">
      <Home handleGenerateCV={handleGenerateCV} />
      <Social />
      <Profile />
      <Education />
      <Skills />
      {isAdjusting && <Experience />}
    </div>
  );
};

export default ResumeLeft;
