// React
import { Link } from "react-router-dom";

// Assets
import writingMan from "../../assets/writingMan.webp";

// CSS
import "./WWDMid.css";

const WWDMid = () => {
  return (
    <div className="WWDMidFlex">
      <div className="WWDMidTextFlex">
        <div className="WWDMidTitel">
          ProgrammEring <strong>och Design</strong>
        </div>
        <div className="WWDMidBread">
          Vi utvecklar skräddarsydda hemsidor som ger dig en stark
          online-närvaro. Med genomtänkt design och avancerad teknik
          förverkligar vi dina digitala visioner.
          <Link to="/du-behöver-en-hemsida" className="WWBMidBreadLink titel">
            <br />
            Utforska fördelarna med en professionell hemsida.
          </Link>
        </div>
      </div>
      <img className="WWDMidDoodle" src={writingMan} alt="A writing man" />
    </div>
  );
};

export default WWDMid;
