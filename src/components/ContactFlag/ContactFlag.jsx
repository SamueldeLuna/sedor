// Assets
import mailIcon from "../../assets/mailIcon.webp";
import instaIcon from "../../assets/instaIcon.webp";

// CSS
import "./ContactFlag.css";

const ContactFlag = () => {
  return (
    <>
      <div className="contactFlagTitel">KONTAKTA oSs</div>
      <div className="contactConFlex">
        <div className="contactItemFlex">
          <div className="contactConTitel">sedorstudio@gmail.com</div>
        </div>
        <a
          href="https://www.instagram.com/sedorstudio/"
          className="contactItemFlex"
        >
          <div className="contactConTitel">@sedorstudio</div>
        </a>
      </div>
    </>
  );
};

export default ContactFlag;
