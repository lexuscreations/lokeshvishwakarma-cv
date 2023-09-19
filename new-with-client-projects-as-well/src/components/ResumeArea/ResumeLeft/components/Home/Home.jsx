import "./home.css";
import { useEffect, useState, useRef } from "react";
import { RESUME_DATA } from "../../../../../config/";
import { BiSun, BiMoon, BiDownload } from "react-icons/bi";
import { HiOutlineDocumentDownload } from "react-icons/hi";

const Home = ({ handleGenerateCV }) => {
  const [qtyRangeVal, setQtyRangeVal] = useState(5);
  const [isDarkThemeEnabled, setIsDarkThemeEnabled] = useState(false);
  const [isQualityRangeVisible, setIsQualityRangeVisible] = useState(false);

  const generateBtnRef = useRef(null);
  const qualitySelectRangeConRef = useRef(null);

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

  const handleOnBlur = (event) => {
    if (
      qualitySelectRangeConRef.current &&
      generateBtnRef.current &&
      !qualitySelectRangeConRef.current.contains(event.target) &&
      !generateBtnRef.current.contains(event.target)
    )
      setIsQualityRangeVisible(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOnBlur);
    return () => document.removeEventListener("mousedown", handleOnBlur);
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

      <div ref={generateBtnRef} className="iconCon">
        <HiOutlineDocumentDownload
          className="generate-pdf-icon-btn"
          title="Generate PDF"
          onClick={() => setIsQualityRangeVisible((prev) => !prev)}
        />
      </div>

      {isQualityRangeVisible && (
        <div className="qualitySelectRange" ref={qualitySelectRangeConRef}>
          <div className="title">Quality</div>
          <div className="labelCon">
            <span>Low</span>
            <span>|</span>
            <span>|</span>
            <span>|</span>
            <span>High</span>
          </div>
          <div className="inputCon">
            <input
              type="range"
              min="1"
              max="5"
              step="1"
              value={qtyRangeVal}
              onChange={(e) => setQtyRangeVal(e.target.value)}
            />
            <BiDownload
              className="generate-pdf-icon-btn"
              title="Download PDF"
              onClick={() => {
                setIsQualityRangeVisible(false);
                handleGenerateCV({ scale: qtyRangeVal });
              }}
            />
          </div>
        </div>
      )}

      <ToggleThemeIcon />
    </section>
  );
};

export default Home;
