// React
import { useState, useEffect } from "react";

// Framer Motion
import { useScroll, useMotionValueEvent } from "framer-motion";

// Assets
import catEar from "../../assets/catear.webp";

import sedorGif from "../../assets/sedor.webp";
import sedorMedium from "../../assets/sedorMedium.webp";
import sedorSmall from "../../assets/sedorSmall.webp";

import youNeed from "../../assets/youNeed.webp";
import smallYouNeed from "../../assets/smallYouNeed.webp";

import aWebsite from "../../assets/aWebsite.webp";
import smallAWebsite from "../../assets/smallAWebsite.webp";

import tiger from "../../assets/tiger.webp";

// CSS
import "./Flag.css";
import { Link } from "react-router-dom";

const Flag = () => {
  // Hover
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(!isHovered);
  };

  const handleMouseLeave = () => {
    setIsHovered(!isHovered);
  };

  // Width check
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      window.innerWidth > 500 ? setIsMobile(true) : setIsMobile(false);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Scrolltracking
  const [scrollBool, setScrollBool] = useState(true);
  const { scrollY } = useScroll();

  const handleScroll = (scroll) => {
    const totalHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollP = scroll / totalHeight;
    return scrollP;
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    const scrollPercent = handleScroll(latest);
    if (!isMobile) {
      scrollPercent >= 0.5 ? setScrollBool(false) : setScrollBool(true);
    } else {
      scrollPercent >= 0.3 ? setScrollBool(false) : setScrollBool(true);
    }
  });

  return (
    <div className="flag">
      <img
        className={`sedorText ${!scrollBool ? "hidden" : ""}`}
        src={sedorGif}
        sizes="(max-width: 500px) 95vw, (max-width: 920px) 90vw, 80vw"
        srcSet={`${sedorSmall} 900w, ${sedorMedium} 1400w, ${sedorGif} 2000w`}
        alt="SEDØR"
      />
      <img className="flagCatEar" src={catEar} alt="Cat" />
      <div className="flagEyes">
        <div className={`flagTextContainer `}>
          <img src={tiger} alt="" className="flagTiger" />
          <Link
            className="flagTextImgLink"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            to="/du-behöver-en-hemsida"
          >
            <img
              className={`flagTextImg ${isHovered ? "hovered" : ""}`}
              src={youNeed}
              sizes="80vw"
              srcSet={`${smallYouNeed} 900w, ${youNeed} 2000w`}
              alt="Du behöver"
            />
            <img
              className={`flagTextImg sub ${isHovered ? "hovered" : ""}`}
              src={aWebsite}
              sizes="80vw"
              srcSet={`${smallAWebsite} 900w, ${aWebsite} 2000w`}
              alt="en hemsida"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Flag;
