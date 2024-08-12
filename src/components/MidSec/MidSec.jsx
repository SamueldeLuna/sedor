// React
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

// Framer Motion
import { motion, useScroll, useTransform } from "framer-motion";

// Assets
import whiteCat from "../../assets/whiteCat.webp";
import monkey from "../../assets/monkey.webp";
import dots from "../../assets/dots.webp";

// CSS
import "./MidSec.css";

const MidSec = () => {
  // Hover
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Parallax effect
  const container = useRef(null);
  const [componentHeight, setComponentHeight] = useState(0);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    const containerElement = container.current;

    const handleComponentH = () => {
      setComponentHeight(containerElement.clientHeight);
    };

    const resizeObs = new ResizeObserver(handleComponentH);
    resizeObs.observe(containerElement);

    handleComponentH();

    return () => {
      resizeObs.disconnect();
    };
  }, []);

  // Scroll speeds
  const fastScroll = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -componentHeight / 3]
  );

  const slowScroll = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -componentHeight / 40]
  );

  const mediumScroll = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -componentHeight / 10]
  );

  return (
    <div ref={container} className="midSecFlex">
      <motion.img
        src={whiteCat}
        alt="White Cat"
        style={{ y: fastScroll }}
        className="midSecWhiteCat"
      />
      <Link to="/vilka-vi-är" className="midSecMonkeyLink">
        <motion.img
          src={monkey}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          alt="Monkey"
          style={{ y: slowScroll }}
          className="midSecMonkey"
        />
      </Link>
      <Link to="/vilka-vi-är" className="midSecLink titel">
        <motion.div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ y: mediumScroll }}
          className={`midSecTitel ${isHovered ? "hovered" : ""}`}
        >
          VILKA
        </motion.div>

        <motion.div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ y: mediumScroll }}
          className={`midSecTitel sub ${isHovered ? "hovered" : ""}`}
        >
          VI ÄR
        </motion.div>
        <img
          src={dots}
          className={`midSecDots ${isHovered ? "hovered" : ""}`}
          alt=""
        />
      </Link>
    </div>
  );
};

export default MidSec;
