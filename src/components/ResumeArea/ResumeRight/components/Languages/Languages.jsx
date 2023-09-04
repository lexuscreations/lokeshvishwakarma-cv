import "./languages.css";
import { RESUME_DATA } from "../../../../../config/";

const Languages = () => {
  return (
    <>
      <section
        className="languages section"
        id="languages"
        data-label="Languages"
        data-icon="BiUserVoice"
      >
        <h2 className="section-title">Languages</h2>

        <div className="languages__container">
          <ul className="languages__content grid">
            {RESUME_DATA.language.map((language_obj, ind) => (
              <li className="languages__name" key={ind}>
                {language_obj.language} <br /> {language_obj.proficiency}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Languages;
