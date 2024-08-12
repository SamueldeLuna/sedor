// React
import { useState } from "react";

// Framer Motion
import { useScroll, useMotionValueEvent } from "framer-motion";

// Assets
import catEar from "../../assets/catear.png";
import sedorGif from "../../assets/sedor.gif";
import youNeed from "../../assets/youNeed.webp";
import aWebsite from "../../assets/aWebsite.webp";
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
    scrollPercent >= 0.3 ? setScrollBool(false) : setScrollBool(true);
  });

  return (
    <div className="flag">
      <img
        className={`sedorText ${!scrollBool ? "hidden" : ""}`}
        src={sedorGif}
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
              alt="Du behöver"
            />
            <img
              className={`flagTextImg sub ${isHovered ? "hovered" : ""}`}
              src={aWebsite}
              alt="en hemsida"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Flag;
