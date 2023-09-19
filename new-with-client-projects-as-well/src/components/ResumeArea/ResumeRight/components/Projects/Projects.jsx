import "./projects.css";
import { useSelector } from "react-redux";
import { RESUME_DATA } from "../../../../../config/";

const Projects = () => {
  const { isAdjusting } = useSelector((state) => state.isAdjusting);

  const projectsData =
    RESUME_DATA[isAdjusting ? "projectsDataForDownloadCV" : "projectsData"];

  return (
    <section
      className="projects section"
      id="projects"
      data-label="Projects"
      data-icon="BiCodeAlt"
    >
      <h2 className="section-title">Projects</h2>

      <div className="projects__container grid">
        {projectsData.map((el, ind) => (
          <div className="project" key={ind}>
            <h3>
              {el.name} | TeamSize: {el.teamSize}
              {el.visitLink && (
                <>
                  {" "}
                  |{" "}
                  <a
                    className="projects__link"
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
              <p>Key Features:</p>
              <ul>
                {el.keyFeatures.map((feature, ind) => (
                  <li key={ind + 10}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
