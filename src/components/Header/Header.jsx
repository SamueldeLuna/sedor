// React
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Motion Frame
import { useScroll, useMotionValueEvent } from "framer-motion";

// Assets
import logo from "../../assets/logo.png";

// Components
import Menu from "../Menu/Menu";

// CSS
import "./Header.css";

const Header = ({ whiteLevel = 0 }) => {
  // Width check
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1100);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Header dissapearing
  const [scrollBool, setScrollBool] = useState(true);
  const [scrollDrirection, setScrollDirection] = useState(true);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    console.log(latest);
    latest >= whiteLevel ? setScrollBool(false) : setScrollBool(true);

    if (isMobile) {
      if (latest > previous) {
        setScrollDirection(false);
      } else {
        setScrollDirection(true);
      }
    } else {
      if (latest > previous && latest > 300) {
        setScrollDirection(false);
      } else {
        setScrollDirection(true);
      }
    }
  });

  return (
    <>
      <div
        className={`headerBar ${!scrollBool ? "white" : ""} ${
          !scrollDrirection ? "hidden" : ""
        }`}
      >
        <Link to="/">
          <img className="brandLogo" src={logo} alt="Logo" />
        </Link>
      </div>
      <Menu />
    </>
  );
};

export default Header;
