import "./home.css";
import { useEffect, useState } from "react";
import { RESUME_DATA } from "../../../../../config/";
import { BiDownload, BiSun, BiMoon } from "react-icons/bi";

const Home = ({ handleGenerateCV }) => {
  const [isDarkThemeEnabled, setIsDarkThemeEnabled] = useState(false);

  const handleThemeCV = () => {
    const isDarkThemeEnabled = document.body.classList.toggle("dark-theme");
    setIsDarkThemeEnabled((prev) => !prev);
    localStorage.setItem("isDarkThemeEnabled", String(isDarkThemeEnabled));
  };

  const ToggleThemeIcon = () => {
    const Icon = isDarkThemeEnabled ? BiSun : BiMoon;
    return (
      <Icon
        className="change-theme-icon-btn"
        title="Toggle Theme"
        onClick={handleThemeCV}
      />
    );
  };

  useEffect(() => {
    const isDarkThemeEnabled =
      localStorage.getItem("isDarkThemeEnabled") === "true";

    if (isDarkThemeEnabled) {
      const condition = isDarkThemeEnabled ? "add" : "remove";
      document.body.classList[condition]("dark-theme");
      setIsDarkThemeEnabled(true);
    }
  }, []);

  return (
    <section className="home" id="home" data-label="Home" data-icon="BiHome">
      <div className="home__container section grid">
        <div className="home__data grid">
          <img
            src={RESUME_DATA.profileImg}
            alt="ProfilePic"
            className="home__img"
          />

          <h1 className="home__title">
            <b>{RESUME_DATA.profileName.firstName}</b>{" "}
            {RESUME_DATA.profileName.lastName}
          </h1>

          <h3 className="home__profession">{RESUME_DATA.designation}</h3>
        </div>

        <div className="home__address grid">
          <h2 className="section-title">CONNECT</h2>

          {RESUME_DATA.connect.map((el, ind) => (
            <span className="home__information" key={ind}>
              <el.icon className="home__icon" style={{ marginTop: "1.5px" }} />{" "}
              <a href={el.href} target="_blank" className="home__link">
                {el.value}
              </a>
            </span>
          ))}
        </div>
      </div>

      <BiDownload
        className="generate-pdf-icon-btn"
        title="Generate PDF"
        onClick={handleGenerateCV}
      />

      <ToggleThemeIcon />
    </section>
  );
};

export default Home;
