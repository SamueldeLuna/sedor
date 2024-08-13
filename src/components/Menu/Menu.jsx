// React
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Framer Motion
import { useScroll, useMotionValueEvent } from "framer-motion";

// Assets
import menuIcon from "../../assets/menu_icon.svg";
import xIcon from "../../assets/x_icon.svg";
import dots from "../../assets/dots.webp";

// CSS
import "./Menu.css";

const MenuIcon = () => {
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

  // Hide pop up menu
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    showMenu ? setShowMenu(false) : setShowMenu(true);
  };

  // Scroll Direction
  const [scrollDrirection, setScrollDirection] = useState(true);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (isMobile) {
      if (latest > previous && latest >= 100) {
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
    <div>
      <img
        onClick={handleShowMenu}
        className={`menuIcon ${showMenu ? "hiddenIcon" : ""} ${
          !scrollDrirection ? "hidden" : ""
        }`}
        src={menuIcon}
        alt="Menu"
      />

      <img
        onClick={handleShowMenu}
        className={`menuIcon xIcon ${showMenu ? "" : "hiddenIcon"}`}
        src={xIcon}
        alt="Close menu"
      />

      <nav className={showMenu ? "menuPop" : "menuOff menuPop"}>
        <Link to="/vad-vi-gör" className="menuItem">
          Vad vI gOr
        </Link>
        <Link to="/vilka-vi-är" className="menuItem">
          VIlka vI är
        </Link>
        <Link to="/kontakt" className="menuItem">
          Kontakt
        </Link>
      </nav>
    </div>
  );
};

export default MenuIcon;
