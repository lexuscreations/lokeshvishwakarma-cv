import "./experience.css";
import { RESUME_DATA } from "../../../../../config/";
import { useSelector } from "react-redux";

const Experience = () => {
  const { isAdjusting } = useSelector((state) => state.isAdjusting);

  return (
    <>
      <section
        className="experience section"
        id="experience"
        data-label="Experience"
        data-icon="BiBriefcase"
      >
        <h2 className="section-title">Experience</h2>

        <div className="experience__container grid">
          {RESUME_DATA.experienceData.map((el, ind, arr) => (
            <div className="experience__content" key={ind}>
              <div className="experience__time">
                <span className="experience__rounder"></span>
                {arr.length - 1 !== ind && (
                  <span className="experience__line"></span>
                )}
              </div>

              <div className="experience__data grid">
                <h3 className="experience__designation">{el.designation}</h3>
                <span className="experience__company_name_and_duration">
                  {el.duration}
                  {!isAdjusting && <> | </>}
                  <a
                    href={el.company_url}
                    target="_blank"
                    className="experience__link"
                  >
                    {el.company_name}
                  </a>
                </span>
                <span className="experience__location">
                  {el.company_location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Experience;
