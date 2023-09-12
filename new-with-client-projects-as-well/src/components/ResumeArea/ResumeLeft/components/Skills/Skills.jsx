import "./skills.css";
// import { useSelector } from "react-redux";
import { RESUME_DATA } from "../../../../../config/";

const Skills = () => {
  // const { isAdjusting } = useSelector((state) => state.isAdjusting);

  const skillsData = RESUME_DATA.skills;
  // const skillsData = RESUME_DATA[!isAdjusting ? "skillsShort" : "skills"];

  return (
    <>
      <section
        className="skills section"
        id="skills"
        data-label="Skills"
        data-icon="BiReceipt"
      >
        <h2 className="section-title">Skills</h2>

        <div
          className="skills__content grid"
          // style={isAdjusting ? { gridTemplateColumns: "repeat(1, 1fr)" } : {}}
        >
          {Object.keys(skillsData).map((objKey, ind) => (
            <ul
              className="skills__data"
              key={ind + 10}
              // style={
              //   isAdjusting
              //     ? {
              //         display: "flex",
              //         justifyContent: "space-between",
              //         flexWrap: "wrap",
              //       }
              //     : {}
              // }
            >
              {skillsData[objKey].map((skill, ind) => (
                <li
                  className={`skills__name ${
                    skill.percent ? "havingPercent" : ""
                  }`}
                  data-percent={skill.percent}
                  key={ind}
                  style={{
                    letterSpacing:
                      skill.name.length <= 4
                        ? "0.2rem"
                        : skill.name.length <= 7
                        ? "0.1rem"
                        : "",
                  }}
                >
                  {skill.name}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </section>
    </>
  );
};

export default Skills;
