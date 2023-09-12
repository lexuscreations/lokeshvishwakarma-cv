import "./education.css";
import { RESUME_DATA } from "../../../../../config/";

const Education = () => {
  return (
    <section
      className="education section"
      id="education"
      data-label="Education"
      data-icon="BiBook"
    >
      <h2 className="section-title">Education</h2>

      <div className="education__container grid">
        <div className="education__content">
          <div className="education__time">
            <span className="education__rounder"></span>
            <span className="education__line"></span>
          </div>
          <div className="education__data grid">
            <h3 className="education__title">
              <a
                href={RESUME_DATA.education.first.website}
                className="education__link"
                target="_blank"
              >
                {RESUME_DATA.education.first.instituteName}
              </a>
            </h3>
            <span className="education__studies">
              {RESUME_DATA.education.first.courseName}
            </span>
            <span className="education__year">
              {RESUME_DATA.education.first.tenure}
            </span>
          </div>
        </div>

        <div className="education__content">
          <div className="education__time">
            <span className="education__rounder"></span>
            <span className="education__line"></span>
          </div>
          <div className="education__data grid">
            <h3 className="education__title">
              <a
                href={RESUME_DATA.education.second.website}
                className="education__link"
                target="_blank"
              >
                {RESUME_DATA.education.second.instituteName}
              </a>
            </h3>
            <span className="education__studies">
              {RESUME_DATA.education.second.courseName}
            </span>
            <span className="education__year">
              {RESUME_DATA.education.second.tenure}
            </span>
          </div>
        </div>

        <div className="education__content">
          <div className="education__time">
            <span className="education__rounder"></span>
          </div>
          <div className="education__data grid">
            <h3 className="education__title">
              <a
                href={RESUME_DATA.education.third.website}
                className="education__link"
                target="_blank"
              >
                {RESUME_DATA.education.third.instituteName}
              </a>
            </h3>
            <span className="education__studies">
              {RESUME_DATA.education.third.courseName}
            </span>
            <span className="education__year">
              {RESUME_DATA.education.third.tenure}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
