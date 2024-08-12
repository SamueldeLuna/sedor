// React
import { useState } from "react";

// Framer Motion
import { useMotionValueEvent, useScroll } from "framer-motion";

// CSS
import "./Home.css";

// Components
import Flag from "../components/Flag/Flag";
import Brick from "../components/Brick/Brick";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import MidSec from "../components/MidSec/MidSec";

const Home = () => {
  const [isDark, setIsDark] = useState(false);
  const { scrollY } = useScroll();

  // Scroll Percent
  const handleScroll = (scroll) => {
    const totalHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollP = scroll / totalHeight;
    return scrollP;
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    const scrollPercent = handleScroll(latest);
    scrollPercent >= 0.75 && window.innerWidth > 500
      ? setIsDark(true)
      : setIsDark(false);
  });

  return (
    <div className={`backdrop ${isDark ? "dark" : ""}`}>
      <Flag />
      <Brick />
      <MidSec />
      <Footer />
      <Header whiteLevel={700} />
    </div>
  );
};

export default Home;
