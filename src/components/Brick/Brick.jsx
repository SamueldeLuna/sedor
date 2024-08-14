// React
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// Framer Motion
import { useScroll, useTransform, motion } from "framer-motion";

// Assets
import computerMan from "../../assets/computerMan.webp";
import dots from "../../assets/dots.webp";

// CSS
import "./Brick.css";

const Brick = () => {
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
      resizeObs.unobserve(containerElement);
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

  return (
    <div ref={container} className="brickFlex">
      <Link to="/vad-vi-gör" className="brickLink titel">
        <motion.div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ y: slowScroll }}
          className={`brickTitel ${isHovered ? "hovered" : ""}`}
        >
          VAD
        </motion.div>
        <motion.div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ y: slowScroll }}
          className={`brickTitel sub ${isHovered ? "hovered" : ""}`}
        >
          VI
        </motion.div>
        <motion.div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ y: slowScroll }}
          className={`brickTitel ${isHovered ? "hovered" : ""}`}
        >
          GÖR
        </motion.div>
        <img
          src={dots}
          alt=""
          className={`brickTitelDots ${isHovered ? "hovered" : ""}`}
        />
      </Link>
      <Link to="vad-vi-gör" className="brickDoodleLink">
        <motion.img
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          src={computerMan}
          alt="Man writing on computer"
          style={{ y: fastScroll }}
          className="brickDoodle"
        />
      </Link>
    </div>
  );
};

export default Brick;
