// Assets
import dots from "../../assets/dots.webp";

// CSS
import "./WWDFlag.css";

const WWDFlag = () => {
  return (
    <div className="WWDFlagFlex">
      <img src={dots} className="dots WWDFlag" alt="" />
      <div className="WWDFlagTitel">Vad GOr</div>
      <div className="WWDFlagTitel right">VI</div>
    </div>
  );
};

export default WWDFlag;
