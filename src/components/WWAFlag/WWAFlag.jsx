// React
import { useRef, useState, useEffect } from "react";

// Framer Motion
import { motion, useTransform, useScroll } from "framer-motion";

// Assets
import catEyes from "../../assets/catEyes.webp";
import dots from "../../assets/dots.webp";

// CSS
import "./WWAFlag.css";

const WWDFlag = () => {
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
  const mediumScroll = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -componentHeight / 10]
  );

  return (
    <div
      ref={container}
      style={{ backgroundImage: `url(${catEyes})` }}
      className="WWAFlagFlex"
    >
      <motion.div style={{ y: mediumScroll }} className="WWAFlagTitel">
        Vilka
      </motion.div>
      <motion.div style={{ y: mediumScroll }} className="WWAFlagTitel sub">
        vi är
      </motion.div>
      <img src={dots} className="WWAFlagDots" alt="" />
    </div>
  );
};

export default WWDFlag;
