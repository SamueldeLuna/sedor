// Components
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import WWAFlag from "../components/WWAFlag/WWAFlag";
import WWAIntro from "../components/WWAIntro/WWAIntro";
import WWAMid from "../components/WWAMid/WWAMid";

const WWA = () => {
  return (
    <>
      <WWAFlag />
      <WWAIntro />
      <WWAMid />
      <Footer />
      <Header whiteLevel={100} />
    </>
  );
};

export default WWA;
