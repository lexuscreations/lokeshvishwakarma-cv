import "./interests.css";
import { RESUME_DATA } from "../../../../../config/";

const Interests = () => {
  return (
    <>
      <section
        className="interests section"
        id="interests"
        data-label="Interests"
        data-icon="BiPalette"
      >
        <h2 className="section-title">Interests</h2>

        <div className="interests__container grid">
          {RESUME_DATA.interest.map((interest_obj, ind) => (
            <div className="interests__content" key={ind}>
              <interest_obj.icon className="interests__icon" />
              <span className="interests__name" style={{ textAlign: "center" }}>
                {interest_obj.website && (
                  <a
                    href={interest_obj.website}
                    className="interests__link"
                    target="_blank"
                  >
                    <div>{interest_obj.skillName.split(" ")[0]}</div>
                    <div>{interest_obj.skillName.split(" ")[1]}</div>
                  </a>
                )}
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Interests;
