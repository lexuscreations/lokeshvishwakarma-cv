import "./scrollToTop.css";
import { debounce } from "../../utils/";
import { useEffect, useRef } from "react";
import { BiUpArrow } from "react-icons/bi";

const ScrollToTop = () => {
  const scrollTopElRef = useRef(null);

  useEffect(() => {
    const scrollTop = () =>
      scrollTopElRef.current.classList[
        window.scrollY >= 200 ? "add" : "remove"
      ]("active");

    const debouncedScrollTop = debounce(scrollTop, 50);
    window.addEventListener("scroll", debouncedScrollTop);

    return () => window.removeEventListener("scroll", debouncedScrollTop);
  }, []);

  return (
    <a href="#" className="scrollToTop" ref={scrollTopElRef}>
      <BiUpArrow />
    </a>
  );
};

export default ScrollToTop;
