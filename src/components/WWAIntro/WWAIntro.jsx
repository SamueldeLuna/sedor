// React
import { useRef, useState, useEffect } from "react";

// Framer Motion
import { motion, useScroll, useTransform } from "framer-motion";

// Assets
import gorilla from "../../assets/gorilla.webp";
import smallGorilla from "../../assets/smallGorilla.webp";

// CSS
import "./WWAIntro.css";

const WWAIntro = () => {
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
    <div ref={container} className="WWAIntroFlex">
      <motion.div style={{ y: mediumScroll }} className="WWAIntroTextFlex">
        <div className="WWAIntroTitel">sedor</div>
        <div className="WWAIntroBread">
          Vi är ett ungt företag med tydligt fokus på nära kundkontakt,
          genomtänkt design och robust programmering. Vårt mål är att leverera
          moderna lösningar som passar dina behov.
        </div>
      </motion.div>
      <motion.img
        style={{ y: slowScroll }}
        src={gorilla}
        alt="gorilla"
        className="WWAIntroGorilla"
      />
    </div>
  );
};

export default WWAIntro;
