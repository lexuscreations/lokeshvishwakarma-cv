import "./personalProject.css";
import { useSelector } from "react-redux";
import { RESUME_DATA } from "../../../../../config/";

const PersonalProjects = () => {
  const { isAdjusting } = useSelector((state) => state.isAdjusting);

  const personalProjectsData =
    RESUME_DATA[
      isAdjusting ? "personalProjectsDataForDownloadCV" : "personalProjectsData"
    ];

  return (
    <section
      className="personalProjects section"
      id="personalProjects"
      data-label="Personal Projects"
      data-icon="BiCodeAlt"
    >
      <h2 className="section-title">Personal Projects</h2>

      <div className="personalProjects__container grid">
        {personalProjectsData.map((el, ind) => (
          <div className="project" key={ind}>
            <h3>
              {el.name}{" "}
              {el.visitLink && (
                <>
                  |{" "}
                  <a
                    className="personalProjects__link"
                    target="_blank"
                    href={el.visitLink || "#"}
                  >
                    Visit
                  </a>
                </>
              )}
            </h3>
            <div>
              <p>
                <el.Description />
              </p>
              {/* <p>Key Features:</p> */}
              <ul>
                {el.keyFeatures.map((feature, ind) => (
                  <li key={ind + 10}>{feature}</li>
                ))}
              </ul>
              {el.note && <p>{el.note}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PersonalProjects;
