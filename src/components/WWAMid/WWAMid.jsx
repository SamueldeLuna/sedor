// Assets
import whiteCat from "../../assets/whiteCat.webp";

// CSS
import "./WWAMid.css";

const WWAMid = () => {
  return (
    <div className="WWAMidFlex">
      <div className="WWAMidPersonFlex">
        <div
          style={{
            backgroundImage: `url(${whiteCat})`,
          }}
          className="WWAMidBoxErik"
        ></div>
        <div className="WWAMidTextFlex">
          <div className="WWAMidName">erik</div>
          <div className="WWAMidTitel sub">designchef</div>
          <div className="WWAMidBread">Arkitektur student på kth</div>
        </div>
      </div>
      <div className="WWAMidPersonFlex">
        <div className="WWAMidTextFlex">
          <div className="WWAMidName">samuel</div>
          <div className="WWAMidTitel">huvud utvecklare</div>
          <div className="WWAMidBread sub">Civilingenjörs student på kth</div>
        </div>
        <div
          style={{ backgroundImage: `url(${whiteCat})` }}
          className="WWAMidBoxSamuel"
        ></div>
      </div>
    </div>
  );
};

export default WWAMid;
