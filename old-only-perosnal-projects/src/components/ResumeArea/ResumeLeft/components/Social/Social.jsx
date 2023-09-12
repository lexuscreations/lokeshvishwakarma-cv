import "./social.css";
import { RESUME_DATA } from "../../../../../config/";

const Links = ({ href, Icon }) => (
  <a href={href} className="social__link" target="_blank">
    <Icon className="social__icon" /> <span>@{href.split("/").at(-2)}</span>
  </a>
);

const Social = () => {
  return (
    <>
      <section className="social section">
        <h2 className="section-title">SOCIAL</h2>
        <div className="social__container grid">
          <Links
            href={RESUME_DATA.contact.linkedin}
            Icon={RESUME_DATA.contact.linkedinIcon}
          />

          <hr
            style={{
              width: "100%",
              margin: "0",
            }}
          />

          {RESUME_DATA.social.map((el, ind) => (
            <Links href={el.link} Icon={el.icon} key={ind} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Social;
