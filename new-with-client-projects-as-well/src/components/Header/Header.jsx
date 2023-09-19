import "./header.css";
import { CgRowLast } from "react-icons/cg";
import { RESUME_DATA } from "../../config";
import { useEffect, useState } from "react";
import { debounce, $, $All } from "../../utils";
import {
  BiHome,
  BiUser,
  BiBook,
  BiReceipt,
  BiBriefcase,
  BiGrid,
  BiLinkExternal,
  BiAward,
  BiUserVoice,
  BiPalette,
  BiCodeAlt,
} from "react-icons/bi";

const iconMap = {
  BiHome,
  BiUser,
  BiBook,
  BiReceipt,
  BiBriefcase,
  BiGrid,
  BiLinkExternal,
  BiAward,
  BiUserVoice,
  BiPalette,
  CgRowLast,
  BiCodeAlt,
};

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [linksIconsData_arrOfObj, setLinksIconsData_arrOfObj] = useState([]);

  const handleMenuOnClick = () => setShowMenu(false);

  useEffect(() => {
    setLinksIconsData_arrOfObj([...$All("section[id]")].map((el) => el));

    const sections = $All("section[id]");

    const scrollActive = () => {
      const scrollY = window.scrollY;

      sections.forEach((current) => {
        const sectionTop = current.offsetTop - 50;

        const condition =
          scrollY > sectionTop && scrollY <= sectionTop + current.offsetHeight;

        const conditionClass = condition ? "add" : "remove";

        // select any part of string, sub-string as well with * selector
        $(`.nav__menu a[href*=${current.id}]`).classList[conditionClass](
          "active"
        );
      });
    };

    const debouncedScrollActive = debounce(scrollActive, 50);
    window.addEventListener("scroll", debouncedScrollActive);

    return () => window.removeEventListener("scroll", debouncedScrollActive);
  }, []);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          {RESUME_DATA.profileName.firstName}
        </a>

        <div className={`nav__menu ${showMenu ? "active" : ""}`}>
          <ul className="nav__list">
            {linksIconsData_arrOfObj.map((el, ind) => (
              <li className="nav__item" key={ind}>
                <a
                  href={`#${el.id}`}
                  className="nav__link active"
                  onClick={handleMenuOnClick}
                >
                  {(() => {
                    const Icon = iconMap[el.dataset.icon];
                    return <Icon className={"nav__icon"} />;
                  })()}
                  {el.dataset.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="nav__toggle"
          onClick={() => setShowMenu((prev) => !prev)}
        >
          <BiGrid className={"nav__icon"} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
