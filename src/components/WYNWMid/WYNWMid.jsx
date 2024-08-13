// React
import { useEffect, useRef, useState } from "react";

// Framer Motion
import { motion, useScroll, useTransform } from "framer-motion";

// CSS
import "./WYNWMid.css";

const WYNWMid = () => {
  // Hover
  const [isHovered, setIsHovered] = useState({});

  const handleMouseEnter = (number) => {
    setIsHovered((prevState) => ({
      ...prevState,
      [number]: true,
    }));
  };

  const handleMouseLeave = (number) => {
    setIsHovered((prevState) => ({
      ...prevState,
      [number]: false,
    }));
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

  // Parallax Effect
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  // Scroll speeds
  const fastScroll = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const mediumScroll = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const slowScroll = useTransform(scrollYProgress, [0, 1], [0, -25]);

  return (
    <div ref={container} className="WYNWMidFlex">
      <motion.div
        onMouseEnter={() => handleMouseEnter(1)}
        onMouseLeave={() => handleMouseLeave(1)}
        style={isMobile ? { y: slowScroll, rotateZ: 5 } : { y: slowScroll }}
        className="WYNWMidText"
      >
        <div className={`WYNWMidConTitel ${isHovered[1] ? "hovered" : ""}`}>
          synlighet
        </div>
        <div className={`WYNWMidConBread ${isHovered[1] ? "hovered" : ""}`}>
          En hemsida ökar din synlighet online, vilket gör det lättare för
          kunder eller användare att hitta dig.
        </div>
      </motion.div>
      <motion.div
        onMouseEnter={() => handleMouseEnter(2)}
        onMouseLeave={() => handleMouseLeave(2)}
        style={
          isMobile ? { y: mediumScroll, rotateZ: -5 } : { y: mediumScroll }
        }
        className="WYNWMidText mid"
      >
        <div className={`WYNWMidConTitel ${isHovered[2] ? "hovered" : ""}`}>
          Tillgänglighet
        </div>
        <div
          className={`WYNWMidConBread till ${isHovered[2] ? "hovered" : ""}`}
        >
          Med en hemsida är din verksamhet tillgänglig dygnet runt, vilket gör
          det möjligt för besökare att ta del av den när som helst.
        </div>
      </motion.div>
      <motion.div
        onMouseEnter={() => handleMouseEnter(3)}
        onMouseLeave={() => handleMouseLeave(3)}
        style={
          isMobile
            ? { y: fastScroll, rotateZ: 5, top: 100 }
            : { y: mediumScroll }
        }
        className="WYNWMidText sub"
      >
        <div className={`WYNWMidConTitel ${isHovered[3] ? "hovered" : ""}`}>
          Information
        </div>
        <div className={`WYNWMidConBread inf ${isHovered[3] ? "hovered" : ""}`}>
          En hemsida ger en central plats för att dela viktig information om
          dina produkter, tjänster eller verksamhet, vilket gör det enkelt för
          besökare att få svar på sina frågor.
        </div>
      </motion.div>
    </div>
  );
};

export default WYNWMid;
