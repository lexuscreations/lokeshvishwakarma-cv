import "./skillsRating.css";
import { RESUME_DATA } from "../../../../../config";

const SkillsRating = () => {
  return (
    <>
      <section
        className="skillsRating section"
        id="skillsRating"
        data-label="Skills Rating"
        data-icon="CgRowLast"
      >
        <h2 className="section-title">Skills Rating</h2>

        <div className="skillsRating__container grid">
          {RESUME_DATA.skillsRatingData.map((el, ind) => (
            <div className="skill_progress_container" key={ind}>
              <div className="skill_label flex-between">
                <div className="skill_name">{el.skill_name}</div>
                <div className="skill-percent">{el.skillPercent}</div>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: el.skillPercent }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default SkillsRating;
