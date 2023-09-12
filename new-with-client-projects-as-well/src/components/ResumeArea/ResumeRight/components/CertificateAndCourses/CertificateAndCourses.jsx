import "./certificateAndCourses.css";
import { RESUME_DATA } from "../../../../../config/";

const CertificateAndCourses = () => {
  return (
    <>
      <section
        className="certificatesAndCourses section"
        id="certificatesAndCourses"
        data-label="Certificates And Courses"
        data-icon="BiAward"
      >
        <div className="certificate__container grid">
          <h2 className="section-title">Certificates</h2>

          {RESUME_DATA.certificatesData.map((el, ind) => (
            <div className="certificate__content flex" key={ind}>
              <el.Icon
                size={35}
                classNameAdditional="certificatesAndCourses_icon"
              />
              <div>
                <h3 className="certificate__title">{el.certificatesOf}</h3>
                <p className="certificate__provider">
                  {el.certificatesProvider}
                </p>
              </div>
            </div>
          ))}
          <a
            href={`${RESUME_DATA.contact.linkedin}details/skills/`}
            target="_blank"
            className="certificateAndCourses_link"
          >
            Find all
          </a>
        </div>

        <div className="course__container grid">
          <h2 className="section-title">Courses</h2>

          {RESUME_DATA.courseData.map((el, ind) => (
            <div className="course__content flex" key={ind}>
              <el.Icon classNameAdditional="certificatesAndCourses_icon" />
              <div>
                <h3 className="course__title">{el.courseOf}</h3>
                <p className="course__provider">{el.courseProvider}</p>
              </div>
            </div>
          ))}
          <a
            href={`${RESUME_DATA.contact.linkedin}details/courses/`}
            target="_blank"
            className="certificateAndCourses_link"
          >
            Find all
          </a>
        </div>
      </section>
    </>
  );
};

export default CertificateAndCourses;
