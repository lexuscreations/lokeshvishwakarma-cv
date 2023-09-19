import "./resumeArea.css";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { html2pdf_Config } from "../../config/";
import ResumeLeft from "./ResumeLeft/ResumeLeft.jsx";
import ResumeRight from "./ResumeRight/ResumeRight.jsx";
import { setIsAdjusting } from "../../redux/isAdjustingState";

const ResumeArea = () => {
  const dispatch = useDispatch();
  const area_CV_Ref = useRef(null);

  const handleGenerateCV = ({ scale }) => {
    dispatch(setIsAdjusting(true));
    document.querySelector("body > .loading_container").style.display = "flex";
    document.querySelector("body > #root").style.display = "none";
    document.querySelector("body").classList.add("cv-adjust");

    setTimeout(() => {
      dispatch(setIsAdjusting(false));
      document.querySelector("body").classList.remove("cv-adjust");
      document.querySelector("body > .loading_container").style.display =
        "none";
      document.querySelector("body > #root").style.display = "block";
    }, 3000);

    setTimeout(() => {
      const isDarkTheme = localStorage.getItem("isDarkThemeEnabled") === "true";
      const spited = html2pdf_Config.filename.split(".");

      html2pdf(area_CV_Ref.current, {
        ...html2pdf_Config,
        html2canvas: { scale },
        filename: `${spited[0]}${
          isDarkTheme ? "_inDarkMode" : "_inLightMode"
        }.${spited[1]}`,
      });
    }, 1000);
  };

  return (
    <div className="resume" ref={area_CV_Ref}>
      <ResumeLeft handleGenerateCV={handleGenerateCV} />
      <ResumeRight />
    </div>
  );
};

export default ResumeArea;
