import "./skills.css";
import { RESUME_DATA } from "../../../../../config/";

const Skills = () => {
  const skillsData = RESUME_DATA.skills;

  return (
    <>
      <section
        className="skills section"
        id="skills"
        data-label="Skills"
        data-icon="BiReceipt"
      >
        <h2 className="section-title">Skills</h2>

        <div className="skills__content grid">
          {Object.keys(skillsData).map((objKey, ind) => (
            <ul className="skills__data" key={ind + 10}>
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
