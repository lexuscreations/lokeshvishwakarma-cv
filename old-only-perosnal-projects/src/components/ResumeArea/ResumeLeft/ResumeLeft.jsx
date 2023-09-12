import "./resumeLeft.css";
import Home from "./components/Home/Home.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Social from "./components/Social/Social.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Education from "./components/Education/Education.jsx";

const ResumeLeft = ({ handleGenerateCV }) => {
  return (
    <div className="resume__left">
      <Home handleGenerateCV={handleGenerateCV} />
      <Social />
      <Profile />
      <Education />
      <Skills />
    </div>
  );
};

export default ResumeLeft;
