// Components
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import WYNWFlag from "../components/WYNWFlag/WYNWFlag";
import WYNWMid from "../components/WYNWMid/WYNWMid";

const WYNW = () => {
  return (
    <>
      <WYNWFlag />
      <WYNWMid />
      <Footer />
      <Header whiteLevel={0} />
    </>
  );
};

export default WYNW;
